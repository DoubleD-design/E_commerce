package com.example.service;

import com.example.Exception.ProductException;
import com.example.model.Cart;
import com.example.model.User;
import com.example.request.AddItemRequest;

public interface CartService {
    public Cart createCart(User user);
    public String addCartItem(Long userId, AddItemRequest request) throws ProductException;
    public Cart findUserCart(Long userId);
}
