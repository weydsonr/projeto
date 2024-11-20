import React from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css'; // Importando o CSS

function Inicio() {
    return (
        <div className="inicio-page"> {/* Adicionando a classe específica */}
            <h1 className="inicio">Bem-vindo ao Sistema</h1>
            <p className="description">Escolha uma opção para navegar pelas páginas:</p>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link className="nav-link" to="/perfil">
                            <span className="link-icon">👤</span> Perfil
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/turma">
                            <span className="link-icon">📚</span> Turma
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/relatorio">
                            <span className="link-icon">📊</span> Relatório
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Inicio;
