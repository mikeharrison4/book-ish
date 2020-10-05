package com.bookish.bookish.models;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class Order {

    @Id
    private final UUID order_id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "user_id")
    int user_id;

    public Order(UUID order_id, int user_id) {
        this.order_id = order_id;
        this.user_id = user_id;
    }

    public UUID getOrder_id() {
        return order_id;
    }

    public int getUser_id() {
        return user_id;
    }

}
