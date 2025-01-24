const { getDB } = require("../common/db");
const { ObjectId } = require("mongodb");

const peliculaCollection = "peliculas";

const handleInsertPeliculaRequest = async (req, res) => {
    try {
        const db = getDB();
        const pelicula = req.body;
        await db.collection(peliculaCollection).insertOne(pelicula);
        res.status(201).send({ message: "Película creada exitosamente" });
    } catch (error) {
        res.status(500).send({ error: "Error al crear la película" });
    }
};

const handleGetPeliculasRequest = async (req, res) => {
    try {
        const db = getDB();
        const peliculas = await db.collection(peliculaCollection).find().toArray();
        res.status(200).send(peliculas);
    } catch (error) {
        res.status(500).send({ error: "Error al obtener las películas" });
    }
};

const handleGetPeliculaByIdRequest = async (req, res) => {
    try {
        const db = getDB();
        const { id } = req.params;
        const pelicula = await db.collection(peliculaCollection).findOne({ _id: new ObjectId(id) });
        if (pelicula) {
            res.status(200).send(pelicula);
        } else {
            res.status(404).send({ error: "Película no encontrada" });
        }
    } catch (error) {
        res.status(500).send({ error: "Error al obtener la película" });
    }
};

const handleUpdatePeliculaByIdRequest = async (req, res) => {
    try {
        const db = getDB();
        const { id } = req.params;
        const updates = req.body;
        await db.collection(peliculaCollection).updateOne(
            { _id: new ObjectId(id) },
            { $set: updates }
        );
        res.status(200).send({ message: "Película actualizada" });
    } catch (error) {
        res.status(500).send({ error: "Error al actualizar la película" });
    }
};

const handleDeletePeliculaByIdRequest = async (req, res) => {
    try {
        const db = getDB();
        const { id } = req.params;
        await db.collection(peliculaCollection).deleteOne({ _id: new ObjectId(id) });
        res.status(200).send({ message: "Película eliminada" });
    } catch (error) {
        res.status(500).send({ error: "Error al eliminar la película" });
    }
};

module.exports = {
    handleInsertPeliculaRequest,
    handleGetPeliculasRequest,
    handleGetPeliculaByIdRequest,
    handleUpdatePeliculaByIdRequest,
    handleDeletePeliculaByIdRequest,
};
