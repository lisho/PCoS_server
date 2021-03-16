const express =  require('express');
const bodyParser = require('body-parser');

/** Importamos las rutas de la api */

const apiRouter = require('./routes/api')

/** Iniciamos el servidor de express */
const app = express();

const port = process.env.PORT || 3030;

/* sincronizamos la base de datos con los modelos */

require("./db/db")

/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    /** Redireccionamos las rutas que vengan a api */

app.use('/api', apiRouter );


/** Arrancamos el servidor */
app.listen(port, () => {
    console.log("Server funcionando en el puerto", port)
})
