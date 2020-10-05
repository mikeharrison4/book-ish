import React from 'react';
import './App.css';
import Books from "./Components/Books/Books";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookDetail from "./Components/Books/BookDetail";
import BookEdit from "./Components/Books/BookEdit";
import {Container, Nav, Navbar} from "react-bootstrap";
import BookAdd from "./Components/Books/BookAdd";
import Error404 from "./Components/Error404";

function App() {
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
            <Link className="nav-link" to="/">Add a user</Link>
          </Nav>
        </Navbar>

        <Container>
          <Switch>
            <Route path="/books" component={Books} exact={true} />
            <Route path="/books/:isbn(\d+)?" component={BookDetail} exact={true} />
            <Route path="/books/:isbn/edit" component={BookEdit} exact={true} />
            <Route path="/books/add" component={BookAdd} exact={true} />
            <Route component={Error404} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
