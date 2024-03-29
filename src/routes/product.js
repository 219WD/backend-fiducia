const express = require("express");
const productSchema = require("../models/product");
const Product = require("../models/product");

const router = express.Router();

// Crear producto
router.post('/products', (req, res) => {
    const { marca, producto, peso, cantidad, vencimiento } = req.body;
    const product = new Product({
        marca,
        producto,
        peso,
        cantidad,
        vencimiento: new Date(vencimiento) // Convertir la cadena de texto en objeto Date
    });

    product.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener todos los productos
router.get('/products', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Obtener un producto por id
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar un producto
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { marca, producto, peso, cantidad, vencimiento } = req.body;
    productSchema
        .updateOne({ _id: id }, { $set: { marca, producto, peso, cantidad, vencimiento } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un producto
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    console.log("",id);
    productSchema
        .deleteOne({ _id: id })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json({ message: error }));
});


module.exports = router;