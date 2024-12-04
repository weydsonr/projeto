
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do Banco de Dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mental_health_db'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rota para obter todos os alunos
app.get('/students', (req, res) => {
    const query = 'SELECT * FROM students';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar alunos.');
        } else {
            res.json(results);
        }
    });
});

// Rota para adicionar um novo aluno
app.post('/students', (req, res) => {
    const { name, date_of_birth, class: className, guardian_name, email, password } = req.body;
    const query = 'INSERT INTO students (name, date_of_birth, class, guardian_name, email, password) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, date_of_birth, className, guardian_name, email, password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao adicionar aluno.');
        } else {
            res.status(201).send('Aluno adicionado com sucesso.');
        }
    });
});

// Rota para criar um relatório
app.post('/reports', (req, res) => {
    const { student_id, teacher_id, behavior_notes, performance_notes, signal } = req.body;
    const query = 'INSERT INTO reports (student_id, teacher_id, behavior_notes, performance_notes, signal) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [student_id, teacher_id, behavior_notes, performance_notes, signal], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao criar relatório.');
        } else {
            res.status(201).send('Relatório criado com sucesso.');
        }
    });
});

// Rota para buscar relatórios de um aluno
app.get('/reports/:studentId', (req, res) => {
    const { studentId } = req.params;
    const query = 'SELECT * FROM reports WHERE student_id = ?';
    db.query(query, [studentId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao buscar relatórios.');
        } else {
            res.json(results);
        }
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
