
function applyExtraSetup(sequelize) {
    console.log(sequelize.models)
	const { perfil_profesional, 
            perfil_usuario,
            user,
            apoyo
         } = sequelize.models;

    perfil_profesional.hasMany(user);

    perfil_usuario.hasMany(user);

    user.belongsTo(perfil_profesional);
    user.belongsTo(perfil_usuario);
    user.hasMany(apoyo)
	
}

module.exports = { applyExtraSetup };