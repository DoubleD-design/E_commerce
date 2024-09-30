package com.example.controller;

import com.example.exception.ProductException;
import com.example.exception.UserException;
import com.example.modal.Review;
import com.example.modal.User;
import com.example.request.ReviewRequest;
import com.example.service.ReviewService;
import com.example.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;
    private final UserService userService;

    public ReviewController(ReviewService reviewService, UserService userService) {
        this.reviewService = reviewService;
        this.userService = userService;
        // TODO Auto-generated constructor stub
    }

    @PostMapping("/create")
    public ResponseEntity<Review> createReviewHandler(@RequestBody ReviewRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        System.out.println("product id " + req.getProductId() + " - " + req.getReview());
        Review review = reviewService.createReview(req, user);
        System.out.println("product review " + req.getReview());
        return new ResponseEntity<Review>(review, HttpStatus.ACCEPTED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductsReviewHandler(@PathVariable Long productId) {
        List<Review> reviews = reviewService.getAllReview(productId);
        return new ResponseEntity<List<Review>>(reviews, HttpStatus.OK);
    }

}
