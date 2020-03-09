import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Users {

    @PrimaryColumn()
    dni: Number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({default: 0})
    amountMovies: Number;

    constructor( dni: Number, name: string, lastName: string, amountMovies: Number) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.amountMovies = amountMovies;
    }

}