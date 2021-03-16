const {Sequelize} = require('sequelize');

/* Traemos los modelos (modelo = tabla) */
 const CiudadanoModel = require("../models/ciudadanos")
 const UserModel = require("../models/users")
 const PerfilesProfesional = require("../models/perfiles_profesional")
 const PerfilesUsuario = require("../models/perfiles_usuario")

/* Parametros de Sequalize: nombre de la bd, usuario, contraseña y un objeto con:
    - host, 
    - dialect (mariadb)
*/
const sequelize = new Sequelize ("pcos", "lisho", "toor", {
    host: "db",
    dialect: "mariadb"
});

/* Creamos las tablas */

const Ciudadano = CiudadanoModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const PerfilProfesional = PerfilesProfesional(sequelize, Sequelize);
const PerfilUsuario = PerfilesUsuario(sequelize, Sequelize);

/* Sincronizamos las tablas con la base de datos (y devuelve una promesa)*/

sequelize.sync({force: false})
    .then(()=> {
        console.log("Tablas sincronizadas")
    })

 /* Exportamos los objetos que vamos a necesitar */   

 module.exports = {
     Ciudadano, User, PerfilProfesional, PerfilUsuario
 }