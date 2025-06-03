require("dotenv").config();

// Chamando express como função
const express = require("express");
const app = express();
const aircraftRoutes = require("./Routes/aircraftRoutes");
const boardingPassRoutes = require("./Routes/boardingPassRoutes");
const flightRoutes = require("./Routes/flightRoutes");
const passengerRoutes = require("./Routes/passengerRoutes");
const sysUserRoutes = require("./Routes/sysUserRoutes");

app.use(express.json()); 

// Rotas
app.use("/aircraft", aircraftRoutes);
app.use("/boardingPass", boardingPassRoutes);
app.use("/flight", flightRoutes);
app.use("/passenger", passengerRoutes);
app.use("/sysUser", sysUserRoutes);

// First Page
app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.listen(process.env.PORT, () => {
    console.log("API está rodando");
})