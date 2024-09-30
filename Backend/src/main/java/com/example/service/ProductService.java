package com.example.service;

import com.example.exception.ProductException;
import com.example.modal.Product;
import com.example.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    // only for admin
    Product createProduct(CreateProductRequest req) throws ProductException;

    String deleteProduct(Long productId) throws ProductException;

    Product updateProduct(Long productId, Product product) throws ProductException;

    List<Product> getAllProducts();

    // for user and admin both
    Product findProductById(Long id) throws ProductException;

    List<Product> findProductByCategory(String category);

    List<Product> searchProduct(String query);

    //	public List<Product> getAllProduct(List<String>colors,List<String>sizes,int minPrice, int maxPrice,int minDiscount, String category, String sort,int pageNumber, int pageSize);
    Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize);

    List<Product> recentlyAddedProduct();


}
