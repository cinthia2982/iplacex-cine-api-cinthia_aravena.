const { ObjectId } = require("mongodb");

const ActorSchema = {
    _id: ObjectId,
    idPelicula: String,
    nombre: String,
    edad: Number,
    estaRetirado: Boolean,
    premios: Array,
};

module.exports = ActorSchema;
