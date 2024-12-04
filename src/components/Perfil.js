import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Perfil.css';

const Perfil = () => {
  const [perfil, setPerfil] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Função para buscar dados do banco de dados
  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get('/api/perfil'); // Substitua pelo seu endpoint
        setPerfil(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do perfil:', error);
      }
    };

    fetchPerfil();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPerfil((prevState) => ({
        ...prevState,
        foto: URL.createObjectURL(file)
      }));
    }
  };

  const toggleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const saveChanges = async () => {
    try {
      await axios.put('/api/perfil', perfil); // Substitua pelo seu endpoint
      alert('Alterações salvas com sucesso!');
      toggleEdit();
    } catch (error) {
      console.error('Erro ao salvar alterações:', error);
    }
  };

  return (
    <div className="perfil-container">
      <h2>Perfil do Professor</h2>

      <div className="perfil-info">
        <div className="campo foto-container">
          <label>Foto de Perfil: </label>
          {isEditing ? (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          ) : (
            <img src={perfil.foto} alt="Foto de Perfil" className="foto" />
          )}
        </div>

        <div className="campo">
          <label>Nome: </label>
          {isEditing ? (
            <input
              type="text"
              name="nome"
              value={perfil.nome || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.nome}</span>
          )}
        </div>

        <div className="campo">
          <label>Data de Nascimento: </label>
          {isEditing ? (
            <input
              type="date"
              name="dataNascimento"
              value={perfil.dataNascimento || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.dataNascimento}</span>
          )}
        </div>

        <div className="campo">
          <label>Sexo: </label>
          {isEditing ? (
            <select
              name="sexo"
              value={perfil.sexo || ''}
              onChange={handleChange}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          ) : (
            <span>{perfil.sexo}</span>
          )}
        </div>

        <div className="campo">
          <label>Endereço: </label>
          {isEditing ? (
            <input
              type="text"
              name="endereco"
              value={perfil.endereco || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.endereco}</span>
          )}
        </div>

        <div className="campo">
          <label>E-mail: </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={perfil.email || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.email}</span>
          )}
        </div>

        <div className="campo">
          <label>Contato:</label>
          {isEditing ? (
            <input
              type="text"
              name="contato"
              value={perfil.contato || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.contato}</span>
          )}
        </div>

        <div className="campo">
          <label>Formação Acadêmica: </label>
          {isEditing ? (
            <input
              type="text"
              name="formacao"
              value={perfil.formacao || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.formacao}</span>
          )}
        </div>

        <div className="campo">
          <label>Disciplina de Ensino: </label>
          {isEditing ? (
            <input
              type="text"
              name="disciplina"
              value={perfil.disciplina || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.disciplina}</span>
          )}
        </div>

        <div className="campo">
          <label>Turma Responsável: </label>
          {isEditing ? (
            <input
              type="text"
              name="turma"
              value={perfil.turma || ''}
              onChange={handleChange}
            />
          ) : (
            <span>{perfil.turma}</span>
          )}
        </div>
      </div>

      <div className="actions">
        <button onClick={toggleEdit}>
          {isEditing ? 'Cancelar' : 'Editar'}
        </button>
        {isEditing && (
          <button onClick={saveChanges}>Salvar</button>
        )}
      </div>
    </div>
  );
};

export default Perfil;
