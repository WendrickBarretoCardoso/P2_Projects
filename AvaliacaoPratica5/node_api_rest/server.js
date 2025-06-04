require("dotenv").config();

// Chamando express como função
const express = require("express");
const app = express();
const aircraftRoutes = require("./Routes/aircraftRoutes");
const boardingPassRoutes = require("./Routes/boardingPassRoutes");
const flightRoutes = require("./Routes/flightRoutes");
const passengerRoutes = require("./Routes/passengerRoutes");
const sysUserRoutes = require("./Routes/sysUserRoutes");
const { execSQLQuery } = require("./Config/db");

app.use(express.json()); 

// Rotas
app.use("/aircraft", aircraftRoutes);
app.use("/boardingPass", boardingPassRoutes);
app.use("/flight", flightRoutes);
app.use("/passenger", passengerRoutes);
app.use("/sysUser", sysUserRoutes);

//Consulta SELECT JOIN
app.get("/consulta", async (req, res) => {
    try {
        const query = `
            SELECT
                bp.boarding_pass_id AS boarding_pass_id,
                bp.seat_number AS seat_number,
                bp.issue_time AS issue_time,
                p.first_name AS passenger_first_name,
                p.last_name AS passenger_last_name,
                p.birth_date AS passenger_birth_date,
                p.passport_number AS passenger_passport_number,
                f.flight_number AS flight_number,
                f.departure_airport AS departure_airport,
                f.arrival_airport AS arrival_airport,
                f.departure_time AS departure_time,
                f.arrival_time AS arrival_time,
                a.model AS aircraft_model,
                a.manufacturer AS aircraft_manufacturer,
                a.capacity AS aircraft_capacity
            FROM
                boarding_pass bp
            JOIN
                passenger p ON bp.passenger_id = p.passenger_id
            JOIN
                flight f ON bp.flight_id = f.flight_id
            JOIN
                aircraft a ON f.aircraft_id = a.aircraft_id
            WHERE
                bp.boarding_pass_id BETWEEN 0 AND 100
            ORDER BY
                bp.boarding_pass_id;
        `;
        const result = await execSQLQuery(query);
        res.json(result);
    } catch (error) {
        console.error("Erro ao executar consulta:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

// First Page
app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.listen(process.env.PORT, () => {
    console.log("API está rodando");
})