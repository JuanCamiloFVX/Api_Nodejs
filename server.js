
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/customers');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


app.use('/access/customers', postRoutes);


mongoose.connect(
    "mongodb://localhost/usuarios", { useNewUrlParser: true },
    (err, res) => {
        err && console.log('Error conectando a la base de datos');
        app.listen(4000, () => {
            console.log('Ahora el servidor esta corriendo en el puerto 4000')
        })
    }
)