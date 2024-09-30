package com.example.service;

import com.example.exception.OrderException;
import com.example.modal.Address;
import com.example.modal.Order;
import com.example.modal.User;

import java.util.List;

public interface OrderService {

    Order createOrder(User user, Address shippingAdress);

    Order findOrderById(Long orderId) throws OrderException;

    List<Order> usersOrderHistory(Long userId);

    Order placedOrder(Long orderId) throws OrderException;

    Order confirmedOrder(Long orderId) throws OrderException;

    Order shippedOrder(Long orderId) throws OrderException;

    Order deliveredOrder(Long orderId) throws OrderException;

    Order cancledOrder(Long orderId) throws OrderException;

    List<Order> getAllOrders();

    void deleteOrder(Long orderId) throws OrderException;

}
