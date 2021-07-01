import {AbstractControl, ValidationErrors} from "@angular/forms";

export class MyValidators {

  static restrictedEmails(control: AbstractControl): ValidationErrors | null {
    if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
      return {
        restrictedEmail: true
      }
    }
    return null
  }

}
