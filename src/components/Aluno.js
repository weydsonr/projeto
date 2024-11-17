import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Aluno.css';

const alunosDetalhes = {
    1: {
        nome_aluno: "João Silva",
        sexo: "Masculino",
        data_nascimento: "2006-05-15",
        turma: "1º Ano A",
        nome_responsavel: "Carlos Silva"
    },
    2: {
        nome_aluno: "Maria Oliveira",
        sexo: "Feminino",
        data_nascimento: "2006-07-20",
        turma: "1º Ano A",
        nome_responsavel: "Ana Oliveira"
    }
    // Adicione os outros alunos aqui
};

function Aluno() {
    const { id } = useParams();
    const aluno = alunosDetalhes[id];
    const navigate = useNavigate();

    if (!aluno) {
        return <h2>Aluno não encontrado!</h2>;
    }

    return (
        <div className="aluno-container">
            <h1>Detalhes do Aluno</h1>
            <p><strong>Nome:</strong> {aluno.nome_aluno}</p>
            <p><strong>Sexo:</strong> {aluno.sexo}</p>
            <p><strong>Data de Nascimento:</strong> {aluno.data_nascimento}</p>
            <p><strong>Turma:</strong> {aluno.turma}</p>
            <p><strong>Responsável:</strong> {aluno.nome_responsavel}</p>
            <div className="aluno-actions">
                <button onClick={() => navigate(-1)}>Voltar</button>
                <button onClick={() => navigate('/relatorio')}>Relatório</button>
            </div>
        </div>
    );
}

export default Aluno;
