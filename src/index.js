const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product")

const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', productRoutes);

//Routes
app.get('/', (req, res) => {
    res.send("Bienvenido a la API")
})

//Mongodb connection
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server en el puerto', port));