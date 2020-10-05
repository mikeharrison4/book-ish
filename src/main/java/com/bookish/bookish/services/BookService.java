package com.bookish.bookish.services;

import com.bookish.bookish.dao.BookDataAccessService;
import com.bookish.bookish.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookDataAccessService bookDataAccessService;

    @Autowired
    public BookService(BookDataAccessService bookDataAccessService) {
        this.bookDataAccessService = bookDataAccessService;
    }

    public List<Book> getAllBooks() {
        return bookDataAccessService.selectAllBooks();
    }

    public Book getBookWithIsbn(String isbn) {
        return bookDataAccessService.selectBookWithIsbn(isbn);
    }

    public void deleteBook(String isbn) {
        bookDataAccessService.deleteBook(isbn);
    }

    public void editBook(String isbn, Book book) {
        bookDataAccessService.editBook(isbn, book);
    }

    public void addBook(Book book) {
        bookDataAccessService.addBook(book);
    }
}
