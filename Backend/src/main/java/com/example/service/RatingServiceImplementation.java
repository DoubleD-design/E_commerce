package com.example.service;

import com.example.Exception.ProductException;
import com.example.model.Product;
import com.example.model.Rating;
import com.example.model.User;
import com.example.repository.RatingRepository;
import com.example.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImplementation implements RatingService {
    private RatingRepository ratingRepository;
    private ProductService productService;
    public RatingServiceImplementation(RatingRepository ratingRepository, ProductService productService) {
        this.ratingRepository = ratingRepository;
        this.productService = productService;
    }
    @Override
    public Rating createRating(RatingRequest request, User user) throws ProductException {
        Product product = productService.findProductById(request.getProductId());
        Rating rating = new Rating();

    }

    @Override
    public List<Rating> getProductsRating(Long productId) {
        return List.of();
    }
}
