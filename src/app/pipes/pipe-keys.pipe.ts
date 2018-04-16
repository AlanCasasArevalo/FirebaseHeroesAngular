import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeKeys',
  pure: false
})
export class PipeKeysPipe implements PipeTransform {

  constructor() {
    console.log('Pasamos por el pipe');
  }

  transform(value: any): any {
    let keys = [];

    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        const element = value[key];
        keys.push(key);
      }
    }

    return keys;
  }

}
