import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name: "User"})
export class UserEntity {

    @PrimaryColumn()
    dni: Number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({default: 0})
    amountMovies: Number;

}
  