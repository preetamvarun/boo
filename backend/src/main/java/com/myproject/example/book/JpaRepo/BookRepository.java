package com.myproject.example.book.JpaRepo;

import com.myproject.example.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {

}

/*
Hibernate is a framework used for persisting java objects in the database.
Advantage with hibernate is it handles all the low-level sql. entityManager.persist(obj);
*/
