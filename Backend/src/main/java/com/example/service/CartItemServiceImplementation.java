package com.example.service;

import com.example.Exception.CartItemException;
import com.example.Exception.UserException;
import com.example.model.Cart;
import com.example.model.CartItem;
import com.example.model.Product;
import com.example.model.User;
import com.example.repository.CartItemRepository;
import com.example.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImplementation implements CartItemService {
    private CartItemRepository cartItemRepository;
    private UserService userService;
    private CartRepository cartRepository;
    public CartItemServiceImplementation(CartItemRepository cartItemRepository, UserService userService, CartRepository cartRepository) {
        this.cartItemRepository = cartItemRepository;
        this.userService = userService;
        this.cartRepository = cartRepository;
    }
    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());

        CartItem createdCartItem = cartItemRepository.save(cartItem);

        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId,Long id, CartItem cartItem) throws CartItemException, UserException {
        CartItem Item = findCartItemById(id);
        User user = userService.findUserById(Item.getUserId());
        if (user.getId().equals(userId)){
            Item.setQuantity(cartItem.getQuantity());
            Item.setPrice(Item.getProduct().getPrice()*Item.getQuantity());
            Item.setDiscountedPrice(Item.getProduct().getDiscountedPrice()*Item.getQuantity());
        }
        return cartItemRepository.save(Item);
    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, long userId) {
        CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, size, userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(long userId, long cartItemId) throws CartItemException, UserException {
        CartItem cartItem = findCartItemById(cartItemId);
        User user = userService.findUserById(cartItem.getUserId());
        User reqUser = userService.findUserById(userId);
        if (user.getId().equals(reqUser.getId())){
            cartItemRepository.deleteById(cartItemId);
        } else {
            throw new CartItemException("You can't remove other user's item");
        }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> opt = cartItemRepository.findById(cartItemId);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new CartItemException("Cart Item not found with id: " + cartItemId);
    }
}
