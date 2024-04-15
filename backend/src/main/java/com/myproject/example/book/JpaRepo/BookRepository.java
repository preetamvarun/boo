package com.myproject.example.book.JpaRepo;

import com.myproject.example.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;


/* The book repository interface is inheriting all the methods from the parent interface which is JpaRepository. The JpaRepository provides method for CRUD operations
when working with database entities. Book is the entity type that is going to be managed and Integer is the type of the primary key that his particular entity is having*/
public interface BookRepository extends JpaRepository<Book, Integer> {

}

/*
Hibernate is a framework used for persisting java objects in the database.
Advantage with hibernate is it handles all the low-level sql. entityManager.persist(obj);

*/
