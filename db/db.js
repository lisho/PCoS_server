const {Sequelize} = require('sequelize');
const { applyExtraSetup } = require('./asociacionesDeModelos');

/* Traemos los modelos (modelo = tabla) */
 const CiudadanoModel = require("../models/ciudadanos");
 const UserModel = require("../models/users")
 const PerfilesProfesionalModel = require("../models/perfiles_profesional")
 const PerfilesUsuarioModel = require("../models/perfiles_usuario")
 const ApoyoModel = require("../models/apoyos")

/* Creamos la base de datos
    Parametros de Sequalize: nombre de la bd, usuario, contraseña y un objeto con:
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
const PerfilProfesional = PerfilesProfesionalModel(sequelize, Sequelize);
const PerfilUsuario = PerfilesUsuarioModel(sequelize, Sequelize);
const Apoyo = ApoyoModel(sequelize, Sequelize);


/* Establecemos las relaciones entre las tablas */

applyExtraSetup(sequelize);

/* Sincronizamos las tablas con la base de datos (y devuelve una promesa)*/

sequelize.sync({force: true})
    .then(()=> {
        console.log("Tablas sincronizadas")
    })

 /* Exportamos los objetos que vamos a necesitar */   

 module.exports = {
     Ciudadano, User, PerfilProfesional, PerfilUsuario, Apoyo
 }