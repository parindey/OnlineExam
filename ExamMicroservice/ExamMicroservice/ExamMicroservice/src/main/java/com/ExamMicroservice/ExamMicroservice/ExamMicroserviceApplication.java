package com.ExamMicroservice.ExamMicroservice;

import com.ExamMicroservice.ExamMicroservice.entities.Proctor;
import com.ExamMicroservice.ExamMicroservice.services.EmailSenderService;
import com.ExamMicroservice.ExamMicroservice.services.ProctorMethods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
@EnableEurekaClient
@SpringBootApplication
public class ExamMicroserviceApplication {

//	@Autowired
//	EmailSenderService service;
//
//	@EventListener(ApplicationReadyEvent.class)
//	public void exam()
//	{
//		service.sendSimpleEmail("shrruthysweet@gmail.com", "Hi", "Hi");
	//}


	public static void main(String[] args) {
		SpringApplication.run(ExamMicroserviceApplication.class, args);
	}
     @Bean
	 public Proctor pc(){
		return new Proctor();


	 }
}
