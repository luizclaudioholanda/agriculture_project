import { Farm } from "../../farm/entities/farm.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Crop")
export class Crop {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ name: 'name' , type: 'varchar' , length: 30 , nullable:false })
    name:string;

    @ManyToOne(() => Farm, farm => farm.crop)
    farm:Farm
}
