import React from "react";
import { useLocation } from "react-router-dom";
import "./ListaRelatorios.css";

function ListaRelatorios() {
    const location = useLocation();
    const relatorios = location.state?.relatorios || [];

    return (
        <div className="lista-relatorios-container">
            <h1>Lista de Relatórios</h1>
            {relatorios.length === 0 ? (
                <p>Nenhum relatório disponível.</p>
            ) : (
                relatorios.map((relatorio, index) => (
                    <div
                        key={index}
                        className={`relatorio-item sinalizacao-${relatorio.sinalizacao.toLowerCase()}`}
                    >
                        <p><strong>Professor:</strong> {relatorio.professor}</p>
                        <p><strong>Aluno:</strong> {relatorio.aluno}</p>
                        <p><strong>Sinalização:</strong> {relatorio.sinalizacao}</p>
                        <p><strong>Estado Emocional:</strong> {relatorio.estado_emocional}</p>
                        <p><strong>Comportamento:</strong> {relatorio.comportamento_em_sala}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default ListaRelatorios;
