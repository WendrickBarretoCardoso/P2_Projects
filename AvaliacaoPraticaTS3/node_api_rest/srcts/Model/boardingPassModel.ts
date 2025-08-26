class BoaardingPass {
    boarding_pass_id: number;
    seat_number: string;
    passenger_id: number;
    flight_id: number;
    issue_time: any;
    constructor (boarding_pass_id: number, seat_number: string, passenger_id: number, flight_id: number, issue_time: any) {
        this.boarding_pass_id = boarding_pass_id;
        this.seat_number = seat_number;
        this.passenger_id = passenger_id;
        this.flight_id = flight_id;
        this.issue_time = issue_time;
    }
}

module.exports = BoaardingPass;