import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@ValidatorConstraint({ name: 'documentValidator', async: false })
export class DocumentValidationRule implements ValidatorConstraintInterface {
  validate(documentNumber: string) {
    console.log('VALIDA DOCUMENTO');
    if (documentNumber === undefined) {
      return false;
    }
    if (documentNumber.length > 11) {
      return cnpj.isValid(documentNumber);
    } else {
      return cpf.isValid(documentNumber);
    }
  }

  defaultMessage(): string {
    return 'Documento no formato incorreto!';
  }
}
