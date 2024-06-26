const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRouter = require('./src/routes/product.route')
const categoriaRouter = require('./src/routes/categoria.route');
const authRouter = require('./src/routes/auth.route');
const { buscar } = require('./src/controllers/buscar.controller');
const adminRouter = require('./src/routes/admin.route');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));


const port = process.env.PORT || 8000;


app.use('/products', productRouter);
app.use('/categorias', categoriaRouter);
app.use('/auth', authRouter);
app.use('/buscar', buscar);
app.use('/admin', adminRouter);



mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado a la base de datos');
        app.listen(port, () => {
            console.log(`Aplicación ejecutándose en el puerto ${port}`);
        });
    })
    .catch(error => console.error('Error al conectar con la base de datos:', error));
