CREATE TABLE Books (
	ISBN int NOT NULL PRIMARY KEY,
    title VARCHAR(255) DEFAULT NULL,
    author VARCHAR(255) DEFAULT NULL,
    book_description varchar(255) DEFAULT NULL,
    num_copies int DEFAULT NULL,
    availability int DEFAULT NULL
)

CREATE TABLE Orders
(
    order_id      int NOT NULL PRIMARY KEY,
    date_taken    dateTime DEFAULT NULL,
    date_due      dateTime DEFAULT NULL,
    date_returned dateTime DEFAULT NULL,
    ISBN          int      DEFAULT NULL,
    user_id       int      DEFAULT NULL,
    FOREIGN KEY FK_ISBN (ISBN) REFERENCES Books (ISBN)
)


CREATE TABLE Users (
	user_id int NOT NULL PRIMARY KEY,
    name VARCHAR(255) DEFAULT NULL,
    address VARCHAR(255) DEFAULT NULL,
    order_id int DEFAULT NULL,
    FOREIGN KEY FK_Order_Id (order_id) REFERENCES Orders(order_id)
);

ALTER TABLE Orders
ADD FOREIGN KEY FK_User_Id(user_id) REFERENCES Users(user_id);
