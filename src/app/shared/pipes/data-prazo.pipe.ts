import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPrazo'
})
export class DataPrazoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var value_ = new Date(value);
    let prazo = 'Pagar até às ' + ("00" + value_.getHours()).slice(-2) + ':' + ("00" + value_.getMinutes()).slice(-2) + ' do dia ' + value_.getDate() + ' de ' + this.getMonth(value_.getMonth()) + ' de ' + value_.getFullYear();
    return prazo;
  }

  getMonth(month: any): String {
    let _month: string = '';
    switch (month) {
      case 0: _month = 'Janeiro';
        break;
      case 1: _month = 'Fevereiro';
        break;
      case 2: _month = 'Março';
        break;
      case 3: _month = 'Abril';
        break;
      case 4: _month = 'Maio';
        break;
      case 5: _month = 'Junho';
        break;
      case 6: _month = 'Julho';
        break;
      case 7: _month = 'Agosto';
        break;
      case 8: _month = 'Setembro';
        break;
      case 9: _month = 'Outubro';
        break;
      case 10: _month = 'Novembro';
        break;
      case 11: _month = 'Dezembro';
        break;
    }
    return _month;
  }
}