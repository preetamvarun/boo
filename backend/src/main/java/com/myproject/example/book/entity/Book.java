package com.myproject.example.book.entity;

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
