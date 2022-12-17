import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string | number, suffix: string, komentarz: string): string {
    return value + suffix + komentarz;
  }

  /*transform(value: string | number, ...args: string[]): string {
    return value + args[0] + args[1];
  }*/

}
