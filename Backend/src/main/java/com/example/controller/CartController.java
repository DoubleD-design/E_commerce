package com.example.controller;


import com.example.Exception.ProductException;
import com.example.Exception.UserException;
import com.example.model.Cart;
import com.example.model.User;
import com.example.request.AddItemRequest;
import com.example.response.ApiResponse;
import com.example.service.CartService;
import com.example.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@Tag(name = "Cart Management", description = "find user cart, add item to cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    @Operation(description = "find cart by user Id")
    public ResponseEntity<Cart>findUserCart(@RequestHeader("Authorization") String jwt) throws UserException{
        User user = userService.findUserProfilebyJwt(jwt);
        Cart cart = cartService.findUserCart(user.getId());
        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    @Operation(description = "add item to cart")
    public ResponseEntity<ApiResponse> addCartItem(@RequestBody AddItemRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user = userService.findUserProfilebyJwt(jwt);
        Cart cart = cartService.findUserCart(user.getId());
        cartService.addCartItem(user.getId(), req);
        ApiResponse res = new ApiResponse();
        res.setMessage("Item added to cart successfully");
        res.setStatus(true);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
