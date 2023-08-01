import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

@Exclude()
export class CreateCropDto {

    @Expose()
    @IsString({ message: "O campo 'nome da plantação' precisa ser texto!" })
    @IsNotEmpty({ message: "O campo 'nome da plantação' não pode ser vazio!" })
    name: string;
}
