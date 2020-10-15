import React, {useState} from 'react';
import './App.css';
import Books from "./Components/Books/Books";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookDetail from "./Components/Books/BookDetail";
import BookEdit from "./Components/Books/BookEdit";
import {Container, Nav, Navbar} from "react-bootstrap";
import BookAdd from "./Components/Books/BookAdd";
import Error404 from "./Components/Error404";
import UserAdd from "./Components/Users/UserAdd";
import Users from "./Components/Users/Users";
import UserDetail from "./Components/Users/UserDetail";
import Home from "./Components/Home";
import BookCheckout from "./Components/Books/BookCheckout";
import { BookContextProvider } from "./Components/Context/BookContext";
import { UserContextProvider } from "./Components/Context/UserContext";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar style={{ marginBottom: '50px' }} bg="dark" variant="dark">
          <Navbar.Brand href="/">Book-ish</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="nav-link" to="/books">Book List</Link>
            <Link className="nav-link" to="/users">Users</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/books/add">Add a book</Link>
            <Link className="nav-link" to="/users/add">Add a user</Link>
          </Nav>
        </Navbar>

        <Container>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/books" exact={true} render={(props) => <BookContextProvider><Books {...props} /></BookContextProvider>} />
            <Route path="/books/:isbn(\d+)?" component={BookDetail} exact={true} />
            <Route path="/books/:isbn/edit" component={BookEdit} exact={true} />
            <Route path="/books/add" component={BookAdd} exact={true} />
            <Route path="/books/:isbn/checkout" exact={true} render={(props) => <UserContextProvider><BookCheckout {...props} /></UserContextProvider>} />
            <Route path="/users" exact={true} render={(props) => <UserContextProvider><Users {...props} /></UserContextProvider>} />
            <Route path="/users/:userId([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})" component={UserDetail} exact={true} />
            <Route path="/users/add" component={UserAdd} exact={true} />
            <Route component={Error404} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
