const express = require('express');
const app = express();

const faker = require('faker');

app.use(express.static("public"));

const port = 3000;

faker.locale = 'pt_BR';




app.get('/', (req, res) => {

    const avatar = faker.image.avatar();
    const nome = faker.name.findName();
    const genero = faker.name.gender();
    const dataNascimento = `${faker.date.past(50, 2000).getDay()}/${faker.date.past(50, 2000).getMonth()}/${faker.date.past(50, 2000).getFullYear()}`;
    const email = faker.internet.email(nome);
    const senha = faker.internet.password();



  return res.send(

    pessoa = {
        avatar,
        nome,
        genero,
        dataNascimento,
        email,
        senha
    }

)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})