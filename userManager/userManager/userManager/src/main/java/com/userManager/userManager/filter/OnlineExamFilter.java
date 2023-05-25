package com.userManager.userManager.filter;

import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Component;

import javax.servlet.*;

import java.io.IOException;
@Component
public class OnlineExamFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

    }


}
