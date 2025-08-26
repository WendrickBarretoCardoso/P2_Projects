class Flight {
    flight_id: number;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: Date;
    aircraft_id: number;
    constructor(flight_id: number, flight_number: string, departure_airport: string, arrival_airport: string, departure_time: string, arrival_time: Date, aircraft_id: number) {
        this.flight_id = flight_id;
        this.flight_number = flight_number;
        this.departure_airport = departure_airport;
        this.arrival_airport = arrival_airport;
        this.departure_time = departure_time;
        this.arrival_time = arrival_time;
        this.aircraft_id = aircraft_id;
    }
}

module.exports = Flight;