import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(8), this.passwordValidator()],
    ],
  });

  ngOnInit(): void {}

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      const hasUppercase = /[A-Z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialCharacter = /[!@#$%^&*]/.test(value);

      if (!hasUppercase || !hasNumber || !hasSpecialCharacter) {
        return { pattern: true };
      }

      return null;
    };
  }

  userLogin() {
    if (this.form.valid) {
      const hardcodedEmail = 'demo@example.com';
      const hardcodedPassword = 'Password123!';
      if (
        this.form.get('email')!.value === hardcodedEmail &&
        this.form.get('password')!.value === hardcodedPassword
      ) {
        this.snackbar.showSnackBar('Login Successful', ['green-snackbar']);
        this.router.navigate(['/usit']);
      } else {
        this.snackbar.showSnackBar('Login Failed', ['red-snackbar']);
      }
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
