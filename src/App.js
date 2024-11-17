import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top" className="navbar-full-width">
          <Navbar.Brand href="#home"> Mental Health</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
              <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button as={Link} to="/login" variant="outline-light">Login</Button>
              <Button as={Link} to="/cadastro" variant="outline-light" className="ms-2">Cadastro</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main>
        <div className="banner bg-info text-white text-center py-5">
          <h1>Bem Vindo ao Mental Health</h1>
          <p>Ajuda de monitoramento educacional</p>
          <Button variant="light" as={Link} to="/sobre">Saiba mais</Button>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Mental Health | Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}

export default App;

