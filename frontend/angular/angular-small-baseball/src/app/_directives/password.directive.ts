import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { PasswordValidators } from '../_validators/password.validator';

@Directive({
  selector: '[appPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: PasswordValidators.format,
      multi: true
    }
  ]
})
export class PasswordDirective {
  constructor() { }
}
