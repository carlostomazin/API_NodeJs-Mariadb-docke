const express = require('express')
const router = new express.Router()
const mysql = require("./mysql").pool;

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

router.get('/:id', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { 
            return res.status(500).send({ error: error }) 
        }
        conn.query( 'SELECT * FROM users WHERE (id = ?)', [req.params.id], (error, resultado) => {
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

router.put('/', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { 
            return res.status(500).send({ error: error}) 
        }
        conn.query ('UPDATE users SET nome = ?, email = ? WHERE id = ? ', [req.body.nome, req.body.email, req.body.id], (error, resultado) => {
            if (error) { 
                return res.status(500).send({ error: error, response: null }) 
            }
            res.status(201).send({
                mensagem: 'Usuario alterado com sucesso'
            })
            conn.release()
        })
    })
})

router.delete('/:id', (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) { 
            return res.status(500).send({ error: error}) 
        }
        conn.query ('DELETE FROM users WHERE (id = ?)', [req.params.id], (error, resultado) => {
            if (error) { 
                return res.status(500).send({ error: error, response: null }) 
            }
            res.status(201).send({
                mensagem: 'Usuario deletado com sucesso'
            })
            conn.release()
        })
    })
})

module.exports = router
