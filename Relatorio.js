import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Relatorio.css";

function Relatorio({ professorAtual, alunoSelecionado }) {
    const [relatorio, setRelatorio] = useState({
        professor: "",
        aluno: "",
        estado_emocional: "",
        comportamento_em_sala: "",
        desempenho_academico: "",
        interacoes_sociais: "",
        participacao_atividades: "",
        sinalizacao: "Verde",
        observacao: ""
    });

    const [relatoriosSalvos, setRelatoriosSalvos] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRelatorio((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Salva o relatório no array local
        setRelatoriosSalvos((prev) => [...prev, relatorio]);

        // Reseta o formulário
        setRelatorio({
            ...relatorio,
            estado_emocional: "",
            comportamento_em_sala: "",
            desempenho_academico: "",
            interacoes_sociais: "",
            participacao_atividades: "",
            sinalizacao: "Verde",
            observacao: ""
        });
    };

    useEffect(() => {
        setRelatorio((prev) => ({
            ...prev,
            professor: professorAtual || "",
            aluno: alunoSelecionado || ""
        }));
    }, [professorAtual, alunoSelecionado]);

    const irParaListaRelatorios = () => {
        navigate("/lista-relatorios", { state: { relatorios: relatoriosSalvos } });
    };

    return (
        <div className="relatorio-page relatorio-container">
            <h1>Relatório de Comportamento</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Professor:</label>
                    <input
                        type="text"
                        name="professor"
                        value={relatorio.professor}
                        onChange={handleInputChange}
                        placeholder="Digite o nome do professor"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Aluno:</label>
                    <input
                        type="text"
                        name="aluno"
                        value={relatorio.aluno}
                        onChange={handleInputChange}
                        placeholder="Digite o nome do aluno"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Estado Emocional:</label>
                    <select
                        className="form-select"
                        name="estado_emocional"
                        value={relatorio.estado_emocional}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Calmo">Calmo</option>
                        <option value="Preocupado">Preocupado</option>
                        <option value="Agressivo">Agressivo</option>
                        <option value="Assustado">Assustado</option>
                        <option value="Feliz">Feliz</option>
                        <option value="Triste">Triste</option>
                        <option value="Cansado">Cansado</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Comportamento em Sala:</label>
                    <select
                        className="form-select"
                        name="comportamento_em_sala"
                        value={relatorio.comportamento_em_sala}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Inquieto">Inquieto</option>
                        <option value="Participativo">Participativo</option>
                        <option value="Desatento">Desatento</option>
                        <option value="Respeitoso">Respeitoso</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Desempenho Acadêmico:</label>
                    <select
                        className="form-select"
                        name="desempenho_academico"
                        value={relatorio.desempenho_academico}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Queda">Queda</option>
                        <option value="Melhora">Melhora</option>
                        <option value="Estável">Estável</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Interações Sociais:</label>
                    <select
                        className="form-select"
                        name="interacoes_sociais"
                        value={relatorio.interacoes_sociais}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Isolado">Isolado</option>
                        <option value="Colaborativo">Colaborativo</option>
                        <option value="Conflituoso">Conflituoso</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Participação em Atividades:</label>
                    <select
                        className="form-select"
                        name="participacao_atividades"
                        value={relatorio.participacao_atividades}
                        onChange={handleInputChange}
                    >
                        <option value="">Selecione</option>
                        <option value="Passiva">Passiva</option>
                        <option value="Ativa">Ativa</option>
                        <option value="Inexistente">Inexistente</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Sinalização:</label>
                    <select
                        className="form-select"
                        name="sinalizacao"
                        value={relatorio.sinalizacao}
                        onChange={handleInputChange}
                    >
                        <option value="Verde">Verde</option>
                        <option value="Amarelo">Amarelo</option>
                        <option value="Vermelho">Vermelho</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Observação:</label>
                    <textarea
                        name="observacao"
                        value={relatorio.observacao}
                        onChange={handleInputChange}
                        placeholder="Digite uma observação adicional aqui..."
                        className="form-control"
                        rows="5"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Salvar Relatório
                </button>
            </form>
            <button
                onClick={irParaListaRelatorios}
                className="btn btn-secondary mt-3"
            >
                Ver Lista de Relatórios
            </button>
        </div>
    );
}

export default Relatorio;
