import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {

  static checkForbiddenProjectName(control: FormControl): { [s: string]: string } {
    if (['Test'].indexOf(control.value) !== -1) {
      return { 'forbiddenProjectName': 'Запрещенное имя' }
    }
    return null;
  }

  static checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (['test@test.ru'].indexOf(control.value) !== -1) {
          resolve({ 'forbiddenEmail': true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return promise;
  }
}
