package com.bookish.bookish.controllers;

import com.bookish.bookish.models.Book;
import com.bookish.bookish.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getAllBooks() {
//        throw new IllegalStateException("Oops, couldn't get all books");
        return bookService.getAllBooks();
    }

    @GetMapping("{isbn}")
    public Book getBookWithIsbn(@PathVariable("isbn") String isbn) {
        return bookService.getBookWithIsbn(isbn);
    }

    @PostMapping("{isbn}")
    public RedirectView editBook(@PathVariable("isbn") String isbn, @RequestBody Book book) {
        bookService.editBook(isbn, book);
        return new RedirectView("http://localhost:3000/api/books/" + isbn);
    }

    @PostMapping("addBook")
    public void addBook(@RequestBody Book book) {
//                throw new IllegalStateException("Failed to add book!");
        bookService.addBook(book);
    }

    @DeleteMapping("{isbn}")
    public void deleteBook(@PathVariable("isbn") String isbn) {
        System.out.println(isbn);
        bookService.deleteBook(isbn);
    }

}
