import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Inicio.module.css';

const Container = styled.div`
    text-align: center;
    background-color: #f0f4f8;
    padding: 50px 20px;
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.5em;
    color: #fff;
    background-color: #4CAF50;
    padding: 15px 30px;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.2s;
    display: inline-block;
    width: 250px;

    &:hover {
        background-color: #45a049;
        transform: scale(1.05);
    }
`;

const LinkIcon = styled.span`
    margin-right: 10px;
    font-size: 1.5em;
`;

function Inicio() {
    return (
        <Container>
            <h1 className='inicio'>Bem-vindo ao Sistema</h1>
            <p>Escolha uma opção para navegar pelas páginas:</p>
            <nav>
                <NavList>
                    <li>
                        <NavLink to="/perfil">
                            <LinkIcon>👤</LinkIcon> Perfil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/turma"> {/* Corrigido de "/Turmas" para "/turma" */}
                            <LinkIcon>📚</LinkIcon> Turma
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/relatorio">
                            <LinkIcon>📊</LinkIcon> Relatório
                        </NavLink>
                    </li>
                </NavList>
            </nav>
        </Container>
    );
}

export default Inicio;


