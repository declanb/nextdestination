package com.nextdestination;

import com.nextdestination.model.Booking;
import com.nextdestination.repository.BookingRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NextDestinationApplication {

    public static void main(String[] args) {
        SpringApplication.run(NextDestinationApplication.class, args);
    }

    @Bean
    CommandLineRunner testBookingSave(BookingRepository repo) {
        return args -> {
            repo.save(new Booking(1L, "Test Booking"));
            repo.findAll().forEach(b -> System.out.println("✅ Booking: " + b.getName()));
        };
    }
}