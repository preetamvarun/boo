package com.myproject.example.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
@SpringBootApplicaiton = @Configuration + @EnableAutoConfiguration + @ComponentScan

@Configuration is a class level annotation that indicates that this class contains one or more bean methods that returns a bean which is managed by the container.
@EnableAutoConfiguration figurest out what are all the necessary configurations that this particular app needs to start and does that.
when we specify @ComponentScan spring boot scans for all those classes that are annotated with @Component, @Service, @Repository, @Controller, @RestController etc.,
It will creates beans which are then managed by the spring IOC container.
*/

/*
SpringApplication.run() method basically creates a configurable application context which is also known as spring application context and returns it. 
This context contains all the beans that are managed by the spring in our application
*/

@SpringBootApplication
public class BookApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookApplication.class, args);
	}

}
