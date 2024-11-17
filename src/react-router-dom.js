import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; 
import Login from './components/Login'; 
import Cadastro from './components/Cadastro';
import Sobre from './Sobre';
import Inicio from './components/Inicio';
import Perfil from './components/Perfil';
import Turma from './components/Turma';
import Aluno from './components/Aluno';
import Relatorio from './components/Relatorio';
import ListaRelatorios from './components/ListaRelatorios';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/turma" element={<Turma />} />
        <Route path="/alunos/:id" element={<Aluno />} />
        <Route path="/relatorio" element={<Relatorio />} />
        <Route path="/lista-relatorios" element={<ListaRelatorios />} />


      </Routes>
    </Router>
  );
}

export default AppRouter;

