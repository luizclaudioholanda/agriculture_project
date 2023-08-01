import { Exclude, Expose, Type } from "class-transformer";
import { IsNotEmpty, IsString, Validate } from "class-validator";
import { CreateFarmDto } from "../../farm/dto/create-farm.dto";
import { DocumentValidationRule } from "../validator/document-validator";

@Exclude()
export class CreateFarmerDto {

    @Expose()
    @IsString({ message: "O campo 'nome do fazendeiro' precisa ser texto!" })
    @IsNotEmpty({ message: "O campo 'nome fazendeiro' não pode ser vazio!" })
    name:string;

    @Expose()
    @IsString({ message: "O campo 'documento' precisa ser texto!" })
    @IsNotEmpty({ message: "O campo 'documento' não pode ser vazio!" })
    @Validate(DocumentValidationRule)
    documentNumber:string

    @Expose()
    farm:CreateFarmDto[];
}
