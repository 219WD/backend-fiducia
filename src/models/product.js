const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
    },
    cantidad: {
        type: Number,
        required: true
    },
    vencimiento: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema);