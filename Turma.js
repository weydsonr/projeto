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
        { nome_aluno: "João Silva", id: 1, foto: "url_da_foto_joao" },
        { nome_aluno: "Maria Oliveira", id: 2, foto: "url_da_foto_maria" }
    ],
    "1º Ano B": [
        { nome_aluno: "Lucas Pereira", id: 3, foto: "url_da_foto_lucas" },
        { nome_aluno: "Ana Santos", id: 4, foto: "url_da_foto_ana" }
    ],
    "2º Ano A": [
        { nome_aluno: "Pedro Almeida", id: 5, foto: "url_da_foto_pedro" },
        { nome_aluno: "Carla Lima", id: 6, foto: "url_da_foto_carla" }
    ],
    "2º Ano B": [
        { nome_aluno: "Paulo Gomes", id: 7, foto: "url_da_foto_paulo" },
        { nome_aluno: "Sofia Rocha", id: 8, foto: "url_da_foto_sofia" }
    ],
    "3º Ano A": [
        { nome_aluno: "Roberto Souza", id: 9, foto: "url_da_foto_roberto" },
        { nome_aluno: "Julia Costa", id: 10, foto: "url_da_foto_julia" }
    ],
    "3º Ano B": [
        { nome_aluno: "Fernando Barros", id: 11, foto: "url_da_foto_fernando" },
        { nome_aluno: "Bianca Freitas", id: 12, foto: "url_da_foto_bianca" }
    ]
};

function Turma() {
    const [turmaSelecionada, setTurmaSelecionada] = useState(null);
    const navigate = useNavigate();

    const handleAlunoClick = (id) => {
        navigate(`/alunos/${id}`);
    };

    return (
        <div className="turma-page"> {/* Agora envolvido pela classe .turma-page */}
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
                                <img
                                    src={aluno.foto}
                                    alt={aluno.nome_aluno}
                                    className="aluno-foto"
                                />
                                <span>{aluno.nome_aluno}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Turma;
