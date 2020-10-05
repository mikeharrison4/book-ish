package com.bookish.bookish.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {

    @Id
    String ISBN;
    String title;
    String author;
    String book_description;
    int num_copies;
    int availability;

    @Override
    public String toString() {
        return "Book{" +
                "ISBN=" + ISBN +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", bookDesc='" + book_description + '\'' +
                ", numCopies=" + num_copies +
                ", availability=" + availability +
                '}';
    }

    public Book(
            @JsonProperty("isbn") String ISBN,
            @JsonProperty("title") String title,
            @JsonProperty("author") String author,
            @JsonProperty("book_description") String book_description,
            @JsonProperty("num_copies") int num_copies,
            @JsonProperty("availability") int availability) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.book_description = book_description;
        this.num_copies = num_copies;
        this.availability = availability;
    }

    public String getISBN() {
        return ISBN;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getBook_description() {
        return book_description;
    }

    public int getNum_copies() {
        return num_copies;
    }

    public int getAvailability() {
        return availability;
    }

}
