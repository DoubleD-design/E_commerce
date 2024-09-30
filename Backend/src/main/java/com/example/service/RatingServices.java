package com.example.service;

import com.example.exception.ProductException;
import com.example.modal.Rating;
import com.example.modal.User;
import com.example.request.RatingRequest;

import java.util.List;

public interface RatingServices {

    Rating createRating(RatingRequest req, User user) throws ProductException;

    List<Rating> getProductsRating(Long productId);

}
