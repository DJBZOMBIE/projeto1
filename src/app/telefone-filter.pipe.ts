import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFilter'
})
export class TelefoneFilterPipe implements PipeTransform {

  // adicionar o DD no numero de telefone
  transform(value: string, isAddDDD: boolean): string {
    let newValue = '';

    if(isAddDDD){
      newValue = '(35) ';
    }

    newValue += value.substring(0, 5) + '-' + value.substring(5);
    return newValue;
  }

}
