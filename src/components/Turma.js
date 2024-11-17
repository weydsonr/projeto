import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Turma.css";

const turmas = [
    { nome_turma: "1º Ano A" },
    { nome_turma: "1º Ano B" },
    { nome_turma: "2º Ano A" },
    { nome_turma: "2º Ano B" },
    { nome_turma: "3º Ano A" },
    { nome_turma: "3º Ano B" }
];

const alunosPorTurma = {
    "1º Ano A": [
        { nome_aluno: "João Silva", id: 1 },
        { nome_aluno: "Maria Oliveira", id: 2 }
    ],
    "1º Ano B": [
        { nome_aluno: "Lucas Pereira", id: 3 },
        { nome_aluno: "Ana Santos", id: 4 }
    ],
    "2º Ano A": [
        { nome_aluno: "Pedro Almeida", id: 5 },
        { nome_aluno: "Carla Lima", id: 6 }
    ],
    "2º Ano B": [
        { nome_aluno: "Paulo Gomes", id: 7 },
        { nome_aluno: "Sofia Rocha", id: 8 }
    ],
    "3º Ano A": [
        { nome_aluno: "Roberto Souza", id: 9 },
        { nome_aluno: "Julia Costa", id: 10 }
    ],
    "3º Ano B": [
        { nome_aluno: "Fernando Barros", id: 11 },
        { nome_aluno: "Bianca Freitas", id: 12 }
    ]
};

function Turma() {
    const [turmaSelecionada, setTurmaSelecionada] = useState(null);
    const navigate = useNavigate();

    const handleAlunoClick = (id) => {
        navigate(`/alunos/${id}`);
    };

    return (
        <div className="turma-container">
            <h1>Selecione uma Turma</h1>
            <div className="turma-grid">
                {turmas.map((turma, index) => (
                    <div
                        key={index}
                        className="turma-card"
                        onClick={() => setTurmaSelecionada(turma.nome_turma)}
                    >
                        {turma.nome_turma}
                    </div>
                ))}
            </div>
            {turmaSelecionada && (
                <div className="aluno-list">
                    <h2>Alunos da Turma: {turmaSelecionada}</h2>
                    {alunosPorTurma[turmaSelecionada].map((aluno) => (
                        <div
                            key={aluno.id}
                            className="aluno-item"
                            onClick={() => handleAlunoClick(aluno.id)}
                        >
                            {aluno.nome_aluno}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Turma;

