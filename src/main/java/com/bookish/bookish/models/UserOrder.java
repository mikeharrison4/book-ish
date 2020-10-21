package com.bookish.bookish.models;

import javax.persistence.Entity;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class UserOrder {

    private final UUID userId;
    private final UUID orderId;
    private final String ISBN;
    private final LocalDate date_taken;
    private final LocalDate date_due;
    private final LocalDate date_returned;
    private final String title;

    public UserOrder(UUID userId, UUID orderId, String isbn, LocalDate date_taken, LocalDate date_due, LocalDate date_returned, String title) {
        this.userId = userId;
        this.orderId = orderId;
        this.ISBN = isbn;
        this.date_taken = date_taken;
        this.date_due = date_due;
        this.date_returned = date_returned;
        this.title = title;
    }

    public UUID getUserId() {
        return userId;
    }

    public UUID getOrderId() {
        return orderId;
    }

    public String getISBN() {
        return ISBN;
    }

    public LocalDate getDate_taken() {
        return date_taken;
    }

    public LocalDate getDate_due() {
        return date_due;
    }

    public LocalDate getDate_returned() {
        return date_returned;
    }

    public String getTitle() {
        return title;
    }

}


