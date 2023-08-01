import { IsNotEmpty, IsNotEmptyObject, IsString } from "class-validator";
import { CreateCropDto } from "../../crop/dto/create-crop.dto";
import { Exclude, Expose, Type } from "class-transformer";
import { CreateFarmerDto } from "../../farmer/dto/create-farmer.dto";

@Exclude()
export class CreateFarmDto {

    @Expose()
    @IsString({ message: "O campo 'nome da fazenda' precisa ser texto!" })
    @IsNotEmpty({ message: "O campo 'nome da fazenda' não pode ser vazio!" })
    name:string;

    @Expose()
    @IsNotEmpty({ message: "O campo 'área plantada' não pode ser vazio!" })
    areable_area:number;

    @Expose()
    @IsNotEmpty({ message: "O campo 'área de vegetação' não pode ser vazio!" })
    vegetation_area:number;

    @Expose()
    @IsNotEmpty({ message: "O campo 'área total' não pode ser vazio!" })
    total_area:number;

    @Expose()
    @IsNotEmptyObject()
    farmer!:CreateFarmerDto;
    
    @Expose()
    crop!:CreateCropDto[];
}
