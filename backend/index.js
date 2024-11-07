const app = require('./src/app');
const { connectToDatabase } = require('./src/config/db');

// Iniciar servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
        await connectToDatabase()
    } catch (error) {
        console.error(error)
    }
});