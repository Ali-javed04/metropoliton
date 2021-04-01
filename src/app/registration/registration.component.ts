import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  currentDate = new Date();

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      cSocialSecurity: ['', Validators.required],
      socialSecurity: ['', Validators.required],
      bestTime: ['', Validators.required],
      contactVia: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      detail: ['', Validators.required],
      hear: ['', Validators.required],
      dateOfBirth: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      cEmail: ['', [Validators.required, Validators.email]],
    });
  }
  get f() { return this.registerForm.controls; }
  savePersonalDetail() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {

    }
  }
}

