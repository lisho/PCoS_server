const Sequelize = require('sequelize');

/* Traemos los modelos (modelo = tabla) */
 const ParticipanteModel = require("../models/participantes")

/* Parametros de Sequalize: nombre de la bd, usuario, contraseña y un objeto con:
    - host, 
    - dialect (mariadb)
*/
const sequelize = new Sequelize ("pcos", "lisho", "toor", {
    host: "db",
    dialect: "mariadb"
});

/* Creamos las tablas */

const Participante = ParticipanteModel(sequelize, Sequelize);

/* Sincronizamos las tablas con la base de datos (y devuelve una promesa)*/

sequelize.sync({force: false})
    .then(()=> {
        console.log("Tablas sincronizadas")
    })

 /* Exportamos los objetos que vamos a necesitar */   

 module.exports = {
     Participante
 }