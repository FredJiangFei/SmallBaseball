import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  @Input() appConfirmPasswordValidator: string;

  validate(control: FormControl) {
    if (!control || !control.value) {
      return null;
    }

    const numberRegex = /[0-9]/;
    const letterRegex = /[a-z]/;
    const password = control.value;

    if (!password) {
      return null;
    }

    if (numberRegex.test(password) && letterRegex.test(password)) {
      return null;
    }

    return {
      passwordInvalid: true,
    };
  }
}
