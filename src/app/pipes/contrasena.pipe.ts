import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, valida: boolean = true ): string {

      return (valida) ? '*'.repeat(value.length) : value;

  }

}
