import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  genders = ['male', 'female']
  signupForm: FormGroup;
  forbiddenUsernames: string[] = ['Alex']

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.checkForbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signupForm.statusChanges.subscribe((status) => {
      console.log('Status form is ' + status)
    });

    this.signupForm.setValue({
      userData: {
        username: 'Alexander',
        email: 'sobaka@s.ru'
      },
      gender: 'male',
      hobbies: []
    });

    this.signupForm.patchValue({
      userData: {
        username: 'Vitya'
      }
    })
  }

  get hobbies() {
    return this.signupForm.get('hobbies') as FormArray
  }

  onAddHobbie() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  checkForbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'forbiddenName': true }
    }
    return null;
  }

  checkForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.ru') {
          resolve({ 'forbiddenEmail': true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
