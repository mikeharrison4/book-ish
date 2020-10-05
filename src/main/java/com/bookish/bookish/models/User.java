package com.bookish.bookish.models;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class User {

    @Id
    private final UUID order_id;
    String first_name;
    String last_name;
    String address;

    public User(UUID order_id, String first_name, String last_name, String address) {
        this.order_id = order_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
    }

    public UUID getOrder_id() {
        return order_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getAddress() {
        return address;
    }
}
