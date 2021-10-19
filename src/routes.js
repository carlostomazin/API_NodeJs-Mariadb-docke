const express = require('express')
const router = new express.Router()
const mysql = require("./mysql").pool;

// MOSTRAR DADOS
router.get('/', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { 
            return res.status(500).send({ error: error }) 
        }
        conn.query( 'SELECT * FROM users', (error, resultado) => {
            if (error) { 
                return res.status(500).send({ error: error }) 
            }
            res.status(201).send({ 
                response: resultado 
            })
            conn.release()
        })
    })
})

// INSERIR DADOS
router.post('/', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { 
            return res.status(500).send({ error: error}) 
        }
        conn.query ('INSERT INTO users (nome, email) VALUES (?,?)', [req.body.nome, req.body.email], (error, resultado) => {
            if (error) { 
                return res.status(500).send({ error: error, response: null }) 
            }
            res.status(201).send({
                mensagem: 'Usuario inserido com sucesso',
                UserID: resultado.insertId
            })
            conn.release()
        })
    })
})

// ALTERAR UM DADO
router.put('/', (req, res, next) => {
    res.status(201).send({ 
        mensagem: 'Usando o PUT'
    })
})

// DELETA UM DADO
router.delete('/', (req, res, next) => {
    res.status(201).send({ 
        mensagem: 'Usando o DELET'
    })
})

module.exports = router