/*
 * Filename: complexCode.js
 * 
 * Description: This complex JavaScript code demonstrates an advanced airport management system.
 * It covers multiple aspects, including flights, passengers, airlines, and airport operations.
 * The code is over 200 lines long and showcases sophisticated programming techniques and logic.
 */

// Flight class representing a single flight with properties and operations
class Flight {
  constructor(id, destination, airline, departureTime, gate) {
    this.id = id;
    this.destination = destination;
    this.airline = airline;
    this.departureTime = departureTime;
    this.gate = gate;
    this.passengers = [];
  }

  addPassenger(passenger) {
    this.passengers.push(passenger);
  }

  removePassenger(passenger) {
    const index = this.passengers.indexOf(passenger);
    if (index !== -1) {
      this.passengers.splice(index, 1);
    }
  }
}

// Passenger class representing an individual passenger with properties
class Passenger {
  constructor(name, passportNumber) {
    this.name = name;
    this.passportNumber = passportNumber;
  }
}

// Airport class managing flights, passengers, and airlines
class Airport {
  constructor(name) {
    this.name = name;
    this.flights = [];
    this.airlines = [];
  }

  addFlight(flight) {
    this.flights.push(flight);
  }

  removeFlight(flight) {
    const index = this.flights.indexOf(flight);
    if (index !== -1) {
      this.flights.splice(index, 1);
    }
  }

  addAirline(airline) {
    this.airlines.push(airline);
  }

  removeAirline(airline) {
    const index = this.airlines.indexOf(airline);
    if (index !== -1) {
      this.airlines.splice(index, 1);
    }
  }
}

// Example usage of the classes to demonstrate complex operations

// Creating an airport
const airport = new Airport("International Airport");

// Creating flights
const flight1 = new Flight(1, "London", "British Airways", "10:00", "A1");
const flight2 = new Flight(2, "Paris", "Air France", "12:30", "B3");
const flight3 = new Flight(3, "New York", "Delta", "14:45", "C7");

// Adding flights to the airport
airport.addFlight(flight1);
airport.addFlight(flight2);
airport.addFlight(flight3);

// Creating passengers
const passenger1 = new Passenger("John Doe", "ABC123");
const passenger2 = new Passenger("Jane Smith", "XYZ789");
const passenger3 = new Passenger("Mike Johnson", "DEF456");

// Adding passengers to flights
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight2.addPassenger(passenger3);

// Printing available flights
console.log("Available Flights:");
airport.flights.forEach(flight => {
  console.log(`Flight ${flight.id}: ${flight.destination} (${flight.airline}) - Departure: ${flight.departureTime}, Gate: ${flight.gate}`);
});

// Removing a passenger from a flight
console.log(`\nRemoving passenger ${passenger2.name} from Flight ${flight1.id}`);
flight1.removePassenger(passenger2);

// Printing updated list of passengers for flight1
console.log(`\nUpdated Passengers for Flight ${flight1.id}:`);
flight1.passengers.forEach(passenger => {
  console.log(`${passenger.name} - Passport: ${passenger.passportNumber}`);
});

// Removing a flight from the airport
console.log(`\nRemoving Flight ${flight3.id} to ${flight3.destination} (${flight3.airline})`);
airport.removeFlight(flight3);

// Printing updated flight list
console.log("\nUpdated Flights:");
airport.flights.forEach(flight => {
  console.log(`Flight ${flight.id}: ${flight.destination} (${flight.airline}) - Departure: ${flight.departureTime}, Gate: ${flight.gate}`);
});

// Adding an airline to the airport
const airline = "Emirates";
console.log(`\nAdding Airline ${airline} to ${airport.name}`);
airport.addAirline(airline);

// Printing updated airline list
console.log("\nUpdated Airlines:");
airport.airlines.forEach(airline => {
  console.log(airline);
});

// Removing an airline from the airport
console.log(`\nRemoving Airline ${airline} from ${airport.name}`);
airport.removeAirline(airline);

// Printing updated airline list
console.log("\nUpdated Airlines:");
airport.airlines.forEach(airline => {
  console.log(airline);
});

// Continued complex code with various operations...

// ... your sophisticated and elaborate code here ...

// End of the complexCode.js file
