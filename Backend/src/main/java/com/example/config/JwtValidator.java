package com.example.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.List;

import static com.example.config.JwtConstant.SECRET_KEY;

public class JwtValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String servletPath = request.getServletPath();
        if (servletPath.startsWith("/auth/signin")) { //Chỉ xác thực token JWT đối với đường dẫn /auth/signin
            String jwt = request.getHeader(JwtConstant.JWT_HEADER);
            if (jwt != null) {
                jwt = jwt.substring(7);
                try {
                    SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
                    Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
                    String email = String.valueOf(claims.get("email"));
                    String authorities = String.valueOf(claims.get("authorities"));
                    List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList(authorities);
                    Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, auths);
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                } catch (Exception e) {
                    // Xử lý ngoại lệ khi token không hợp lệ. Bạn có thể tùy chỉnh cách xử lý ở đây
                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                    return; // Dừng xử lý yêu cầu ở đây
                }
            } else {
                // Xử lý trường hợp không có token JWT. Bạn có thể tùy chỉnh cách xử lý ở đây
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return; // Dừng xử lý yêu cầu ở đây
            }
        }
        filterChain.doFilter(request, response);
    }
}
