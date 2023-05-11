import { AbstractControl, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function nameAsyncValidator(control: AbstractControl): any {
  const nameExist = control.value === 'Fred';
  return of(nameExist ? { nameExist: true } : null).pipe(delay(2000));
}

export class PasswordValidators {
  static format(control: AbstractControl): ValidationErrors | null {
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

  static shouldEqualToPassowrd(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmpassword')?.value;
    if (password !== confirmPassword) {
      return {
        mismatch: true,
      };
    }

    return null;
  }
}
