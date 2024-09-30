package com.example.controller;
import com.example.exception.OrderException;
import com.example.exception.UserException;
import com.example.modal.Order;
import com.example.repository.OrderRepository;
import com.example.response.ApiResponse;
import com.example.response.PaymentLinkResponse;
import com.example.service.OrderService;
import com.example.service.UserService;
import com.example.user.domain.OrderStatus;
import com.example.user.domain.PaymentStatus;
import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Value("${paypal.client.id}")
    private String clientId;

    @Value("${paypal.client.secret}")
    private String clientSecret;

    private final OrderService orderService;
    private final UserService userService;
    private final OrderRepository orderRepository;

    public PaymentController(OrderService orderService, UserService userService, OrderRepository orderRepository) {
        this.orderService = orderService;
        this.userService = userService;
        this.orderRepository = orderRepository;
    }

    @PostMapping("/payments/{orderId}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable Long orderId,
                                                                 @RequestHeader("Authorization") String jwt)
            throws UserException, OrderException {

        Order order = orderService.findOrderById(orderId);

        // Cấu hình PayPal
        APIContext apiContext = new APIContext(clientId, clientSecret, "sandbox");

        // Tạo các đối tượng Amount, Transaction và Payer để tạo thanh toán
        Amount amount = new Amount();
        amount.setCurrency("USD");
        amount.setTotal(String.format("%.2f", order.getTotalPrice())); // Tổng số tiền

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);
        transaction.setDescription("Order payment for Order ID: " + orderId);

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        // Tạo đối tượng Payment với các thông tin đã khai báo
        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        // Redirect URLs sau khi thanh toán thành công hoặc thất bại
        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl("http://localhost:4200/payment-failed");
        redirectUrls.setReturnUrl("http://localhost:4200/payment-success?order_id=" + orderId);
        payment.setRedirectUrls(redirectUrls);

        try {
            // Tạo Payment qua PayPal API
            Payment createdPayment = payment.create(apiContext);

            String approvalLink = createdPayment.getLinks().stream()
                    .filter(link -> link.getRel().equals("approval_url"))
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException("No approval URL found"))
                    .getHref();

            PaymentLinkResponse res = new PaymentLinkResponse(approvalLink, createdPayment.getId());
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);

        } catch (PayPalRESTException e) {
            e.printStackTrace();
            throw new RuntimeException("Error occurred while creating PayPal payment");
        }
    }

    @GetMapping("/payments")
    public ResponseEntity<ApiResponse> redirect(@RequestParam("paymentId") String paymentId,
                                                @RequestParam("PayerID") String payerId,
                                                @RequestParam("order_id") Long orderId)
            throws PayPalRESTException, OrderException {

        APIContext apiContext = new APIContext(clientId, clientSecret, "sandbox");
        Order order = orderService.findOrderById(orderId);

        // Xác nhận thanh toán PayPal
        Payment payment = new Payment();
        payment.setId(paymentId);

        PaymentExecution paymentExecution = new PaymentExecution();
        paymentExecution.setPayerId(payerId);

        Payment executedPayment = payment.execute(apiContext, paymentExecution);

        if ("approved".equals(executedPayment.getState())) {
            order.getPaymentDetails().setPaymentId(paymentId);
            order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
            order.setOrderStatus(OrderStatus.PLACED);
            orderRepository.save(order);

            ApiResponse res = new ApiResponse("Your order has been placed successfully", true);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponse("Payment failed", false), HttpStatus.BAD_REQUEST);
        }
    }
}