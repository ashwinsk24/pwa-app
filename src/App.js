import React from "react";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary">
          <Container>
            <Navbar.Brand> Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/users"}>
                Users
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
