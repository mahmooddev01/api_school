import express from 'express';
import dotenv from 'dotenv';
import filiereRoutes from "./src/routes/filiereRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Bienvenue sur l'API de Gestion Ecole"})
});

app.use('/api/filieres', filiereRoutes);


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});