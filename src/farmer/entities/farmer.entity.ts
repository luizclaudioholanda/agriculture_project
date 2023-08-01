import { Validate } from "class-validator";
import { Farm } from "../../farm/entities/farm.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DocumentValidationRule } from "../validator/document-validator";

@Entity("Farmer")
export class Farmer {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ name: 'name' , type: 'varchar' , length: 120, nullable: false })
    name:string;

    @Column({ name: 'document_number' , type: 'varchar' , length: 14, nullable: false })
    documentNumber:string

    @OneToMany(() => Farm, farm => farm.farmer, {eager: true})
    farm:Farm[];
}
