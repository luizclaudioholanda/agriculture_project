import { State } from "../../state/entities/state.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("City")
export class City {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ name: 'name' , type: 'varchar' , length: 120 })
    name:string;

    @ManyToOne(() => State, state => state.city)
    state:State;
}
