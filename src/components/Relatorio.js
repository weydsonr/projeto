import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Relatorio.css";

function Relatorio({ professorAtual, alunoSelecionado }) {
    const [relatorio, setRelatorio] = useState({
        professor: professorAtual || "",
        aluno: alunoSelecionado || "",
        estado_emocional: "",
        comportamento_em_sala: "",
        desempenho_academico: "",
        interacoes_sociais: "",
        participacao_atividades: "",
        sinalizacao: "Verde" // Padrão inicial
    });

    const [relatoriosSalvos, setRelatoriosSalvos] = useState([]);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRelatorio((prev) => ({ ...prev, [name]: value }));
    };

    const handleSinalizacaoChange = (e) => {
        setRelatorio((prev) => ({ ...prev, sinalizacao: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Salva o relatório na lista local
        setRelatoriosSalvos((prev) => [...prev, relatorio]);

        // Reseta o formulário
        setRelatorio({
            ...relatorio,
            estado_emocional: "",
            comportamento_em_sala: "",
            desempenho_academico: "",
            interacoes_sociais: "",
            participacao_atividades: "",
            sinalizacao: "Verde"
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
        <div className="relatorio-container">
            <h1>Relatório de Comportamento</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Professor:</label>
                    <input type="text" name="professor" value={relatorio.professor} readOnly />
                </div>
                <div className="form-group">
                    <label>Aluno:</label>
                    <input type="text" name="aluno" value={relatorio.aluno} readOnly />
                </div>
                <div className="form-group">
                    <label>Estado Emocional (ex: "Calmo", "Preocupado", "Agressivo"):</label>
                    <textarea
                        name="estado_emocional"
                        value={relatorio.estado_emocional}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Comportamento em Sala (ex: "Inquieto", "Participativo"):</label>
                    <textarea
                        name="comportamento_em_sala"
                        value={relatorio.comportamento_em_sala}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Desempenho Acadêmico (ex: "Queda", "Melhora", "Estável"):</label>
                    <textarea
                        name="desempenho_academico"
                        value={relatorio.desempenho_academico}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Interações Sociais (ex: "Isolado", "Colaborativo"):</label>
                    <textarea
                        name="interacoes_sociais"
                        value={relatorio.interacoes_sociais}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Participação em Atividades (ex: "Passiva", "Ativa"):</label>
                    <textarea
                        name="participacao_atividades"
                        value={relatorio.participacao_atividades}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Sinalização:</label>
                    <select name="sinalizacao" value={relatorio.sinalizacao} onChange={handleSinalizacaoChange}>
                        <option value="Verde">Verde</option>
                        <option value="Amarelo">Amarelo</option>
                        <option value="Vermelho">Vermelho</option>
                    </select>
                </div>
                <button type="submit" className="btn-submit">Salvar Relatório</button>
            </form>
            <button onClick={irParaListaRelatorios} className="btn-navigate">
                Ver Lista de Relatórios
            </button>
        </div>
    );
}

export default Relatorio;

