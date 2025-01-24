const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://cluster-express:cinthia2982@cluster-express.kyg59.mongodb.net/cine-db?retryWrites=true&w=majority&appName=cluster-express";
const client = new MongoClient(uri);

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Conexión exitosa a MongoDB Atlas");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        throw error;
    }
};

const getDB = () => client.db("cine-db");

module.exports = { connectDB, getDB };

