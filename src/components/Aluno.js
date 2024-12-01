import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Aluno.css';

const alunosDetalhes = {
    1: {
        nome_aluno: "João Silva",
        sexo: "Masculino",
        data_nascimento: "2006-05-15",
        turma: "1º Ano A",
        nome_responsavel: "Carlos Silva",
        foto: "url_da_foto_joao" // Adicione a URL da foto aqui
    },
    2: {
        nome_aluno: "Maria Oliveira",
        sexo: "Feminino",
        data_nascimento: "2006-07-20",
        turma: "1º Ano A",
        nome_responsavel: "Ana Oliveira",
        foto: "url_da_foto_maria" // Adicione a URL da foto aqui
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
        <div className="aluno-page"> {/* Página específica para estilização */}
            <div className="aluno-container">
                <h1>Detalhes do Aluno</h1>
                <div className="aluno-info">
                    <div className="aluno-photo">
                        <img src={aluno.foto} alt={aluno.nome_aluno} className="foto" />
                    </div>
                    <div className="aluno-details">
                        <p><strong>Nome:</strong> {aluno.nome_aluno}</p>
                        <p><strong>Sexo:</strong> {aluno.sexo}</p>
                        <p><strong>Data de Nascimento:</strong> {aluno.data_nascimento}</p>
                        <p><strong>Turma:</strong> {aluno.turma}</p>
                        <p><strong>Responsável:</strong> {aluno.nome_responsavel}</p>
                    </div>
                </div>
                <div className="aluno-actions">
                    <button onClick={() => navigate(-1)}>Voltar</button>
                    <button onClick={() => navigate('/relatorio')}>Relatório</button>
                </div>
            </div>
        </div>
    );
}

export default Aluno;
