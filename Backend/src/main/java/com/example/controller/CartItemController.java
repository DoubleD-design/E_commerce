package com.example.controller;

import com.example.Exception.CartItemException;
import com.example.Exception.UserException;
import com.example.model.User;
import com.example.service.CartItemService;
import com.example.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cartitem")
public class CartItemController {
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private UserService userService;

    @DeleteMapping("/{cartItemId}")
    @Operation(description = "Remove cart item from cart")
    @ApiResponse(description = "Delete cart item")
    public ResponseEntity<com.example.response.ApiResponse> deleteCartItem(@PathVariable Long cartItemId, @RequestHeader("Authorization") String jwt) throws UserException, CartItemException{
        User user = userService.findUserProfilebyJwt(jwt);
        cartItemService.removeCartItem(user.getId(), cartItemId);
        com.example.response.ApiResponse res = new com.example.response.ApiResponse();
        res.setMessage("Cart item removed successfully");
        res.setStatus(true);
        return new ResponseEntity<>(res, org.springframework.http.HttpStatus.OK);
    }

}
