CREATE TABLE IF NOT EXISTS user (
    user_id VARCHAR(36) NOT NULL PRIMARY KEY,
    first_name VARCHAR(255) DEFAULT NULL,
    last_name VARCHAR(255) DEFAULT NULL,
    address VARCHAR(255) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS book (
   ISBN int NOT NULL auto_increment PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL,
   book_description varchar(255) NOT NULL,
   num_copies int NOT NULL,
   availability int NOT NULL
);

CREATE TABLE IF NOT EXISTS `order` (
    order_id VARCHAR(36) NOT NULL PRIMARY KEY,
    ISBN INT NOT NULL,
    date_taken date NOT NULL,
    date_due date NOT NULL,
    date_returned date NOT NULL,
    is_checked_out BOOLEAN NOT NULL DEFAULT true,
    FOREIGN KEY FK_ISBN (ISBN) REFERENCES book(ISBN)
);

CREATE TABLE IF NOT EXISTS user_order (
    user_id VARCHAR(36) NOT NULL REFERENCES user(user_id),
    order_id VARCHAR(36) NOT NULL REFERENCES `order`(order_id),
    FOREIGN KEY FK_user_id (user_id) REFERENCES user(user_id),
    FOREIGN KEY FK_order_id (order_id) REFERENCES `order`(order_id)
);

# CREATE TABLE IF NOT EXISTS OrderItem (
#     order_id VARCHAR(36) NOT NULL REFERENCES `Order`(order_id),
#     date_taken date NOT NULL,
#     date_due date NOT NULL,
#     date_returned date NOT NULL,
#     ISBN int NOT NULL,
#     FOREIGN KEY FK_ISBN (ISBN) REFERENCES Book(ISBN),
#     FOREIGN KEY FK_Order_id (order_id) REFERENCES `Order`(order_id)
# );

# ALTER TABLE `Order`
#     ADD FOREIGN KEY FK_User_Id(user_id) REFERENCES User(user_id);

