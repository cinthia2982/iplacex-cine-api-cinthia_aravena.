const express = require("express");
const {
    handleInsertPeliculaRequest,
    handleGetPeliculasRequest,
    handleGetPeliculaByIdRequest,
    handleUpdatePeliculaByIdRequest,
    handleDeletePeliculaByIdRequest,
} = require("./controller");

const peliculaRoutes = express.Router();

peliculaRoutes.post("/pelicula", handleInsertPeliculaRequest);
peliculaRoutes.get("/peliculas", handleGetPeliculasRequest);
peliculaRoutes.get("/pelicula/:id", handleGetPeliculaByIdRequest);
peliculaRoutes.put("/pelicula/:id", handleUpdatePeliculaByIdRequest);
peliculaRoutes.delete("/pelicula/:id", handleDeletePeliculaByIdRequest);

module.exports = peliculaRoutes;
