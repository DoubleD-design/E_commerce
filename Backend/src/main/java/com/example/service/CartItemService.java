package com.example.service;

import com.example.Exception.CartItemException;
import com.example.Exception.UserException;
import com.example.model.Cart;
import com.example.model.CartItem;
import com.example.model.Product;


public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
    public CartItem isCartItemExist(Cart cart, Product product, String size, long userId);
    public void removeCartItem(long userId, long cartItemId) throws CartItemException, UserException;
    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
