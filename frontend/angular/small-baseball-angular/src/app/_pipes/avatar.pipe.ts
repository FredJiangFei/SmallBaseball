import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'userAvatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (!value) {
      return 'boy';
    }
    return value;
  }
}
