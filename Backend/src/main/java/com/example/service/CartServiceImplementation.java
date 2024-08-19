package com.example.service;

import com.example.Exception.ProductException;
import com.example.model.Cart;
import com.example.model.CartItem;
import com.example.model.Product;
import com.example.model.User;
import com.example.repository.CartRepository;
import com.example.request.AddItemRequest;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService{
    private CartRepository cartRepository;
    private CartItemService cartItemService;
    private ProductService productService;
    public CartServiceImplementation(CartRepository cartRepository, CartItemService cartItemService, ProductService productService) {
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productService = productService;
    }
    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest request) throws ProductException {
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(request.getProductId());
        CartItem isPresent = cartItemService.isCartItemExist(cart, product, request.getSize(), userId);
        if(isPresent == null){
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setCart(cart);
            cartItem.setQuantity(request.getQuantity());
            cartItem.setUserId(userId);

            int price = request.getQuantity()*product.getDiscountedPrice();
            cartItem.setPrice(price);
            cartItem.setSize(request.getSize());

            CartItem createdCartItem = cartItemService.createCartItem(cartItem);
            cart.getCartItems().add(createdCartItem);
        }
        return "Item has been added yo cart";
    }

    @Override
    public Cart findUserCart(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        int totalPrice = 0;
        int totalDiscountedPrice = 0;
        int totalItem = 0;

        for (CartItem cartitem : cart.getCartItems()){
            totalPrice = totalPrice + cartitem.getPrice();
            totalDiscountedPrice = totalDiscountedPrice + cartitem.getDiscountedPrice();
            totalItem = totalItem + cartitem.getQuantity();
        }
        cart.setTotalPrice(totalPrice);
        cart.setTotalItem(totalItem);
        cart.setTotalDiscountPrice(totalDiscountedPrice);
        cart.setDiscount(totalPrice - totalDiscountedPrice);

        return cartRepository.save(cart);
    }
}
