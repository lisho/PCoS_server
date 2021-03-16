module.exports = (sequelize, type) => {

    return sequelize.define("perfil_profesional", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        perfil: type.STRING,
        descripcion: type.STRING,
       
    })
}