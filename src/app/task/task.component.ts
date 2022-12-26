import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      project: new FormControl(null, [Validators.required, CustomValidators.checkForbiddenProjectName]),
      email: new FormControl(null, [Validators.required, Validators.email], CustomValidators.checkForbiddenEmail),
      status: new FormControl('Critical'),
    });
  }

  statuses: string[] = ['Stable', 'Critical', 'Finished']

  onSubmit() {
    console.log(this.projectForm)
  }


}
