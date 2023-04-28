const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página Inicial");
});

app.post("/cadastrar", async(req, res) => {

   console.log(req.body);

   await User.create(req.body)
   .then(() => {
    return res.json({
        erro: false,
        mensagem: "Usuário cadastrado com sucesso!"
    })
   }).catch(() => {
    return res.status(400).json({
        erro: false,
        mensagem: "Erro: Usuário não cadastrado com sucesso!"
    })
   })

    res.send("Cadastrar!");
})
app.listen(5252, () => {
    console.log("Servidor Iniciado na porta 5252!")
})

