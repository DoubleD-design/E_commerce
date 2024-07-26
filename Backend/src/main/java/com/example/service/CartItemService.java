package com.example.service;

import com.example.Exception.CartItemException;
import com.example.Exception.UserException;
import com.example.model.CartItem;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId, CartItem cartItem) throws CartItemException, UserException;
}
