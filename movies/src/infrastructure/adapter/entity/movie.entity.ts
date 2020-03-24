import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name: "Movie"})
export class MovieEntity {

    @PrimaryColumn()
    id: Number;

    @Column()
    title: string;

    @Column()
    synopsis: string;

    constructor( id: Number, title: string, synopsis: string) {
        this.id = id;
        this.title = title;
        this.synopsis = synopsis;
    }   

}