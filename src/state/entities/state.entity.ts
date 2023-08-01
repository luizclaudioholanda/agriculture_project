import { Farm } from "../../farm/entities/farm.entity";
import { City } from "../../city/entities/city.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("State")
export class State {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ name: 'name' , type: 'varchar' , length: 60 })
    name:string;

    @OneToMany(() => Farm, farm => farm.state, {eager: true})
    farm:Farm[];

    @OneToMany(() => City, city => city.state, {eager: true})
    city:City[]
}
