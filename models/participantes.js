
module.exports = (sequelize, type) => {
    return sequelize.define("participante", {
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

    })
}