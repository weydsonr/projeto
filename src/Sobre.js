import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Sobre.css'; 


function Sobre() {
  return (
    <div>
      <div className="sobre-banner bg-secondary text-white text-center py-5">
        <h1>Sobre a Plataforma</h1>
        <p>Conheça mais sobre a nossa plataforma de apoio a educadores e alunos.</p>
      </div>

      <Container id="sobre" className="my-5">
        <Row>
          <Col md={6}>
            <h2>Sobre a Mental Health</h2>
            <p>
              A Mental Health é uma plataforma que ajuda os educadores a identificar e apoiar alunos que enfrentam desafios de saúde mental.
            </p>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Como Funciona</Card.Title>
                <Card.Text>
                  Os professores podem relatar sinais comportamentais dos alunos, e o sistema classifica a gravidade. Alertas imediatos são enviados aos pais para uma intervenção adicional.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sobre;
