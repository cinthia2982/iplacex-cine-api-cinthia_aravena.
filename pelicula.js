const { ObjectId } = require("mongodb");

const PeliculaSchema = {
    _id: ObjectId,
    nombre: String,
    géneros: Array,
    anioEstreno: Number,
};

module.exports = PeliculaSchema;
