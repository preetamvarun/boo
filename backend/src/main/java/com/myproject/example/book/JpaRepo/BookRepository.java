package com.myproject.example.book.JpaRepo;

import com.myproject.example.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
