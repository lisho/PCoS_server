const bodyParser = require('body-parser');
const express =  require('express');

const app = express();

app.use(bodyParser.json());
app,use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(3030, () => {
    console.log("Server funcionando!!")
})