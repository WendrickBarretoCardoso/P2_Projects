class Passenger {
    constructor(passenger_id, first_name, last_name, birth_date, passport_number) {
        this.passenger_id = passenger_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
        this.passport_number = passport_number;
    }
}

module.exports = Passenger;