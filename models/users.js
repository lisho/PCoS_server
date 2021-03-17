PerfilProfesional = require ("./perfiles_profesional")

module.exports = (sequelize, type) => {

    const User = sequelize.define("user", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        apellidos: type.STRING,
        dni: type.STRING,
        telefono: type.STRING,
        email: type.STRING,
        /* perfil_profesional_id: type.INTEGER, */
        /* perfil_usuario_id: type.INTEGER */

    })
   
    return User
}

