package com.example.service;

import com.example.exception.ProductException;
import com.example.modal.Cart;
import com.example.modal.CartItem;
import com.example.modal.User;
import com.example.request.AddItemRequest;

public interface CartService {

    Cart createCart(User user);

    CartItem addCartItem(Long userId, AddItemRequest req) throws ProductException;

    Cart findUserCart(Long userId);

}
