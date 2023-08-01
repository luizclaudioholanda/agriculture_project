import { Injectable } from "@nestjs/common";
import { Farm } from "../entities/farm.entity";

@Injectable()
export class FarmValidator{

    totalAreaValidator(farm: Farm){
        return farm.total_area >= farm.areable_area + farm.vegetation_area;
    }
}