const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json()); 

app.post('/usuarios', async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: { name, email }
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "E-mail já cadastrado ou dados inválidos." });
  }
});

app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});