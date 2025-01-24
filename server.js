const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/common/db");

const peliculaRoutes = require("./src/pelicula/routes");
const actorRoutes = require("./src/actor/routes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bienvenido al cine Iplacex");
});

app.use("/api", peliculaRoutes);
app.use("/api", actorRoutes);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("No se pudo iniciar el servidor:", error);
    });
