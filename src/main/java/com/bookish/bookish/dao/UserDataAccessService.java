package com.bookish.bookish.dao;

import com.bookish.bookish.models.User;
import com.bookish.bookish.models.UserOrder;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public class UserDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> selectAllUsers() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, mapUsersFromDb());
    }

    public User selectUserWithUserId(String userId) {
        String sql = "SELECT * FROM user WHERE user_id = '" + userId + "'";
        return jdbcTemplate.queryForObject(sql, mapUsersFromDb());
    }

    private RowMapper<User> mapUsersFromDb() {
        return (resultSet, i) -> {
            String userIdStr = resultSet.getString("user_id");
            UUID userId = UUID.fromString(userIdStr);
            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String address = resultSet.getString("address");
            return new User(
                    userId,
                    firstName,
                    lastName,
                    address
            );
        };
    }

    public List<UserOrder> selectAllUserOrders(String userId) {
        String sql = "" +
                "SELECT user_order.*, " +
                "`order`.*, " +
                "book.title " +
                "FROM user " +
                "JOIN user_order USING(user_id) " +
                "JOIN `order` USING(order_id) " +
                "JOIN book USING(isbn) " +
                "WHERE user_id = '" + userId + "'";
        return jdbcTemplate.query(sql, mapUserOrderFromDb());
    }

    private RowMapper<UserOrder> mapUserOrderFromDb() {
        return (resultSet, i) -> {
            String orderIdStr = resultSet.getString("order_id");
            String userIdStr = resultSet.getString("user_id");
            String isbn = resultSet.getString("isbn");
            LocalDate dateTaken = resultSet.getDate("date_taken").toLocalDate();
            LocalDate dateDue = resultSet.getDate("date_due").toLocalDate();
            LocalDate dateReturned = resultSet.getDate("date_returned").toLocalDate();
            String title = resultSet.getString("title");
            return new UserOrder(
                    UUID.fromString(userIdStr),
                    UUID.fromString(orderIdStr),
                    isbn,
                    dateTaken,
                    dateDue,
                    dateReturned,
                    title
            );
        };
    }
}
