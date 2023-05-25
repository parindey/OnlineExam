package com.truevaluate.apigateway.Truevaluate_apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableEurekaClient
@SpringBootApplication
@CrossOrigin("*")
public class TruevaluateApigatewayApplication {

	public static void main(String[] args) {
		System.out.println("helloo");
		SpringApplication.run(TruevaluateApigatewayApplication.class, args);
	}

}
