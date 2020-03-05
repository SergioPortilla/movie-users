export class User {

    dni: Number;
    name: string;
    lastName: string;
    amountMovies: Number;
 
    constructor( dni: Number, name: string, lastName: string, amountMovies: Number) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.amountMovies = amountMovies;
    }

}