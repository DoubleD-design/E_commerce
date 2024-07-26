package com.example.service;

import com.example.Exception.ProductException;
import com.example.model.Cart;
import com.example.model.User;
import com.example.repository.CartRepository;
import com.example.request.AddItemRequest;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService{
    private CartRepository cartRepository;
    private CartItemService cartItemService;
    @Override
    public Cart createCart(User user) {
        return null;
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest request) throws ProductException {
        return "";
    }

    @Override
    public Cart findUserCart(Long userId) {
        return null;
    }
}
