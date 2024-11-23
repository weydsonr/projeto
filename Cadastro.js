import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import './Cadastro.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [data_nasci, setDataNasci] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Cadastro realizado com:', nome, email, senha, sexo, endereco, telefone);
  };

  return (
    <div className="cadastro-page">
      <Container className="cadastro-container">
      <h2>Cadastro</h2>
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

          {/* Campo Data de Nascimento */}
          <Form.Group controlId="formNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              placeholder="data de nascimento"
              value={data_nasci}
              onChange={(e) => setDataNasci(e.target.value)}
            />
          </Form.Group>

          {/* Campo Email */}
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Campo Senha */}
          <Form.Group controlId="formSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formSexo">
            <Form.Label>Sexo</Form.Label>
            <Form.Control
              as="select"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
            >
              <option value="">Escolha seu sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Digite seu telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Group>

         
          <Button as={Link} to="/inicio" variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Cadastro;
