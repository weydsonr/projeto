import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import './Cadastro.css'


function Cadastro() {
  const [nome, setNome] = useState('');
  const [data_nasci, setdata_nasci] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Cadastro realizado com:', nome, email, senha);
  };

  return (
    <div className="my-5">
      <h2>Cadastro</h2>
      <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formNascimento">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            placeholder="data de nascimento"
            value={data_nasci}
            onChange={(e) => setdata_nasci(e.target.value)}
          />
        </Form.Group>
    
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSenha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>

        <Button as={Link} to="/inicio" variant="primary" type="submit">Cadastrar</Button>
      </Form>
      </Container>
    </div>
  );
}

export default Cadastro;
