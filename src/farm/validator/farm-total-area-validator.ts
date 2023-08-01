import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { cpf, cnpj } from "cpf-cnpj-validator";

@ValidatorConstraint({ name: 'farmTotalAreaValidator', async: false })
export class FarmTotalAreaValidationRule implements ValidatorConstraintInterface {
  
    validate(total_area: number) {
        return true;
    }
  
    defaultMessage(): string {
      return 'Total incorreto da area da fazenda!';
    }
  }