package com.example.repository;

import com.example.modal.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("Select r from Rating r where r.product.id=:productId")
    List<Review> getAllProductsReview(@Param("productId") Long productId);
}
