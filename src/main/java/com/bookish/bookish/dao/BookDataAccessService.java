package com.bookish.bookish.dao;

import com.bookish.bookish.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    public BookDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Book> selectAllBooks() {
        String sql = "SELECT * FROM book";
        return jdbcTemplate.query(sql, mapBooksFromDb());
    }

    public Book selectBookWithIsbn(String isbn) {
        String sql = "SELECT * FROM book WHERE isbn = " + isbn;
        return jdbcTemplate.queryForObject(sql, mapBooksFromDb());
    }

    private RowMapper<Book> mapBooksFromDb() {
        return (resultSet, i) -> new Book(
                resultSet.getString("isbn"),
                resultSet.getString("title"),
                resultSet.getString("author"),
                resultSet.getString("book_description"),
                resultSet.getInt("num_copies"),
                resultSet.getInt("availability")
        );
    }

    public boolean deleteBook(String isbn) {
        String sql = "DELETE FROM book WHERE isbn = " + isbn;
        return jdbcTemplate.update(sql) == 1;
    }

    public int editBook(String isbn, Book book) {
        String sql = "UPDATE Book SET title = ?, author = ?, book_description = ?, num_copies = ?, availability = ? WHERE isbn = ?";
         return jdbcTemplate.update(
                sql,
                book.getTitle(),
                book.getAuthor(),
                book.getBook_description(),
                book.getNum_copies(),
                book.getAvailability(),
                isbn
        );
    }

    public int addBook(Book book) {
        String sql = "INSERT INTO Book (title, author, book_description, num_copies, availability) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(
                sql,
                book.getTitle(),
                book.getAuthor(),
                book.getBook_description(),
                book.getNum_copies(),
                book.getAvailability()
        );
    }
}
