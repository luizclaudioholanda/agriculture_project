import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from "class-validator";

import { Exclude, Expose, Type } from "class-transformer";
import { CreateStateDto } from "../../state/dto/create-state.dto";

@Exclude()
export class CreateCityDto {

    @Expose()
    @IsString({ message: "O campo 'nome' precisa ser texto!" })
    @IsNotEmpty({ message: "O campo 'nome da cidade' não pode ser vazio!" })
    name: string;

    @Expose()
    @IsDefined({ message: "O objeto estado precisa ser definido!"})
    @IsNotEmptyObject()
    @IsObject({ message: "'Estado' precisa ser um objeto"})
    @ValidateNested({ message: "O campo 'estado' não pode ser vazio!" })
    @Type(() => CreateStateDto)
    state!:CreateStateDto;
}
