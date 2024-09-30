package com.example.service;

import com.example.exception.ProductException;
import com.example.modal.Review;
import com.example.modal.User;
import com.example.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

    Review createReview(ReviewRequest req, User user) throws ProductException;

    List<Review> getAllReview(Long productId);


}
