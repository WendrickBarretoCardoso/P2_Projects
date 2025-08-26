class Aircraft {
    aircraft_id: number;
    model: string;
    manufacturer: string;
    capacity: number;
    constructor (aircraft_id: number, model: string, manufacturer: string, capacity: number) {
        this.aircraft_id = aircraft_id;
        this.model = model;
        this.manufacturer = manufacturer;
        this.capacity = capacity;
    }
}

module.exports = Aircraft;