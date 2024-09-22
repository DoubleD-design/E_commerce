package com.example.service;

import com.example.Exception.ProductException;
import com.example.model.Review;
import com.example.model.User;
import com.example.request.ReviewRequest;

import java.util.List;

public interface ReviewService {
    public Review createReview(ReviewRequest reguest, User user) throws ProductException;
    public List<Review> getAllReview(Long productId);

}
