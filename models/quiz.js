//Definicion del modelo de Quiz con validación

module.exports= function(sequelize, DataTypes) {
	return sequelize.define(
		{ pregunta: {
			type: DataTypes.STRING, 
			VALIDATE: { notEmpty: {msg: "-> Falta Pregunta"}}
		},
		respuesta: {
			type: DataTypes.STRING,
			validate: { notEmpty: {msg: "-> Falta Respuesta"}}

		}
	}
	);
}
