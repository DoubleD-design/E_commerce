package com.example.modal;

import com.example.user.domain.PaymentMethod;
import com.example.user.domain.PaymentStatus;

public class PaymentDetails {

    private PaymentMethod paymentMethod;
    private PaymentStatus status;
    private String paymentId;
    private String paypalPaymentLinkId;
    private String paypalPaymentLinkReferenceId;
    private String paypalPaymentLinkStatus;
    private String paypalPaymentId​;

    public PaymentDetails() {
        // TODO Auto-generated constructor stub
    }

    public String getpaypalPaymentLinkId() {
        return paypalPaymentLinkId;
    }

    public void setpaypalPaymentLinkId(String paypalPaymentLinkId) {
        this.paypalPaymentLinkId = paypalPaymentLinkId;
    }

    public String getpaypalPaymentLinkReferenceId() {
        return paypalPaymentLinkReferenceId;
    }

    public void setpaypalPaymentLinkReferenceId(String paypalPaymentLinkReferenceId) {
        this.paypalPaymentLinkReferenceId = paypalPaymentLinkReferenceId;
    }

    public String getpaypalPaymentLinkStatus() {
        return paypalPaymentLinkStatus;
    }

    public void setpaypalPaymentLinkStatus(String paypalPaymentLinkStatus) {
        this.paypalPaymentLinkStatus = paypalPaymentLinkStatus;
    }

    public String getpaypalPaymentId​() {
        return paypalPaymentId​;
    }

    public void setpaypalPaymentId​(String paypalPaymentId​) {
        this.paypalPaymentId​ = paypalPaymentId​;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public PaymentStatus getStatus() {
        return status;
    }

    public void setStatus(PaymentStatus status) {
        this.status = status;
    }


}
