const bodyParser = require('body-parser');
const express =  require('express');

const app = express();

const port = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(port, () => {
    console.log("Server funcionando en el puerto", port)
})