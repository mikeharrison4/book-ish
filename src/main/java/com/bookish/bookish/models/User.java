package com.bookish.bookish.models;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class User {

    @Id
    private final UUID user_id;
    String first_name;
    String last_name;
    String address;

    public User(UUID user_id, String first_name, String last_name, String address) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
    }

    public UUID getUser_id() {
        return user_id;
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
