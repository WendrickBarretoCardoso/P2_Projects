class Passenger {
    passenger_id: number;
    first_name: string;
    last_name: string;
    birth_date: Date;
    passport_number: string;
    constructor(passenger_id: number, first_name: string, last_name: string, birth_date: Date, passport_number: string) {
        this.passenger_id = passenger_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
        this.passport_number = passport_number;
    }
}

module.exports = Passenger;