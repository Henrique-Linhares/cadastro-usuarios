import express from 'express'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient({});

const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {
    await prisma.user.create({
        data: {
           email: req.body.email,
           name: req.body.name,
           age: req.body.age
        }
    });

    res.status(201).json(req.body);
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.listen(3000)