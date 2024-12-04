import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios'; // Importação do Axios para requisições HTTP
import './Cadastro.css';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [data_nasci, setDataNasci] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o recarregamento da página ao enviar o formulário

    if (!nome || !data_nasci || !email || !senha || !sexo) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      // Envia os dados para o servidor
      const response = await axios.post('http://localhost:5000/api/perfil', {
        nome,
        dataNascimento: data_nasci,
        email,
        senha,
        sexo,
        endereco,
        contato: telefone,
        foto: 'https://via.placeholder.com/150', // Foto padrão
      });

      if (response.status === 201) {
        alert('Cadastro realizado com sucesso!');
        setNome('');
        setDataNasci('');
        setEmail('');
        setSenha('');
        setSexo('');
        setEndereco('');
        setTelefone('');
      } else {
        alert('Erro ao realizar o cadastro. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Por favor, tente novamente.');
    }
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
              required
            />
          </Form.Group>

          <Form.Group controlId="formNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              value={data_nasci}
              onChange={(e) => setDataNasci(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formSexo">
            <Form.Label>Sexo</Form.Label>
            <Form.Control
              as="select"
              value={sexo}
              onChange={(e) => setSexo(e.target.value)}
              required
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

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Cadastro;
