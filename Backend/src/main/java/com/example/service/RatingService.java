package com.example.service;



import com.example.Exception.ProductException;
import com.example.model.Rating;
import com.example.model.User;
import com.example.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RatingService {
    public Rating createRating(RatingRequest request, User user) throws ProductException;
    public List<Rating> getProductsRating(Long productId);
}
