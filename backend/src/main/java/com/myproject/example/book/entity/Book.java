package com.myproject.example.book.entity;

/*
  Hibernate provides ORM (object to relational mappinp). In orm, the developers define the mapping between java table and database table.
  JPA stands for jakarta persistence Api.
  JPA is not a framework it is a specification that defines a set of interfaces and requirements. There are some frameworks out there that implements these interfaces
  from JPAspec and provides their implementation. Hibernate is used by default in spring boot.
  For example, if we want to save a java object into a database, entityManager.persist(obj); entityManager is a JPA helper object. it handles low level sql.
  for example, if we want to find a student from the database using an id which is a primary  key we write
  Student s = entityManager.find(Student.class, id);
*/



import jakarta.persistence.*;
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int Id;

    @Column(name = "title")
    private String Title;

    @Column(name = "author_name")
    private String authorName;

    @Column(name = "page_count")
    private int pageCount;

    public Book(){

    }
    
    public Book(int id, String title, String authorName, int pageCount) {
        Id = id;
        Title = title;
        this.authorName = authorName;
        this.pageCount = pageCount;
    }
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }
    public String getTitle() {
        return Title;
    }
    public void setTitle(String title) {
        Title = title;
    }
    public String getAuthorName() {
        return authorName;
    }
    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }
    public int getPageCount() {
        return pageCount;
    }
    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }
}
