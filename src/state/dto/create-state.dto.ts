import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateCityDto } from "src/city/dto/create-city.dto";
import { CreateFarmDto } from "src/farm/dto/create-farm.dto";

@Exclude()
export class CreateStateDto {

    @Expose()
    id:number;

    @Expose()
    @IsString({ message: "O campo 'nome' precisa ser texto!" })
    @IsNotEmpty({ message: "O campo 'nome do estado' não pode ser vazio!" })
    name: string;

    @Expose()
    city:CreateCityDto[]

    @Expose()
    farm:CreateFarmDto[]
}
