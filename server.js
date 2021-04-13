//Imports
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/customers');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

//Uso de las rutas
app.use('/customers', postRoutes);

//Conectado a MOngo
mongoose.connect(
    "mongodb://localhost/usuarios", { useNewUrlParser: true },
    (err, res) => {
        err && console.log('Error conectando a la base de datos');
        app.listen(4000, () => {
            console.log('Servidor corriendo en el puerto 4000')
        })
    }
)