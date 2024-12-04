const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection(process.env.DATABASE_URL || {
    host: process.env.MYSQLHOST || 'junction.proxy.rlwy.net',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'IbTzEzQlEEJMbdlsnAHMahZnkZLdkvPD',
    database: process.env.MYSQLDATABASE || 'railway',
    port: process.env.MYSQLPORT || 39602,
    connectTimeout: 20000,
});

db.connect(err => {
    if (err) {
        console.error(`Erro ao conectar ao banco de dados: ${err.message}`);
        return;
    }
    console.log('Conectado ao banco de dados no Railway.');
});

app.get('/students', (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) {
            console.error(`Erro na consulta de alunos: ${err.message}`);
            res.status(500).json({ message: 'Erro ao buscar alunos.' });
        } else {
            res.json(results);
        }
    });
});

app.post('/students', (req, res) => {
    const { name, date_of_birth, class: className, guardian_name, email, password } = req.body;
    if (!name || !date_of_birth || !className || !email || !password) {
        return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
    }
    const query = 'INSERT INTO students (name, date_of_birth, class, guardian_name, email, password) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, date_of_birth, className, guardian_name, email, password], (err, results) => {
        if (err) {
            console.error(`Erro ao adicionar aluno: ${err.message}`);
            res.status(500).json({ message: 'Erro ao adicionar aluno.' });
        } else {
            res.status(201).json({ message: 'Aluno adicionado com sucesso.', id: results.insertId });
        }
    });
});

app.post('/reports', (req, res) => {
    const { student_id, teacher_id, behavior_notes, performance_notes, signal } = req.body;
    if (!student_id || !teacher_id || !signal) {
        return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
    }
    const query = 'INSERT INTO reports (student_id, teacher_id, behavior_notes, performance_notes, signal) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [student_id, teacher_id, behavior_notes, performance_notes, signal], (err, results) => {
        if (err) {
            console.error(`Erro ao criar relatório: ${err.message}`);
            res.status(500).json({ message: 'Erro ao criar relatório.' });
        } else {
            res.status(201).json({ message: 'Relatório criado com sucesso.', id: results.insertId });
        }
    });
});

app.get('/reports/:studentId', (req, res) => {
    const { studentId } = req.params;
    const query = 'SELECT * FROM reports WHERE student_id = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error(`Erro ao buscar relatórios: ${err.message}`);
            res.status(500).json({ message: 'Erro ao buscar relatórios.' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Nenhum relatório encontrado para este aluno.' });
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
