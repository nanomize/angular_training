import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string, Character?:string): string {
    return value.replace(Character || '-',' ');
  }

}
