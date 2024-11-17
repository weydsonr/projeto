import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import App from '../App';

function Home() {
  return (
    <div className="banner bg-info text-white text-center py-5">
      <h1>Bem-vindo ao Mental Health</h1>
      <p>Ajuda de monitoramento educacional</p>
      <Button variant="light" as={Link} to="/sobre">Saiba mais</Button>
    </div>
  );
}

export default Home;
