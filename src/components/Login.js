import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login realizado com:', email, password);
  };

  return (
    <div className="login-page">
      
      <Container className="login-container">
        <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label >Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="button-container">
  <Button as={Link} to="/inicio" variant="primary" type="submit" className="primary">
    Entrar
  </Button>
  <Button as={Link} to="/" variant="secondary" className="secondary">
    Voltar
  </Button>
</Form.Group>

        </Form>
      </Container>
    </div>
  );
}

export default Login;
