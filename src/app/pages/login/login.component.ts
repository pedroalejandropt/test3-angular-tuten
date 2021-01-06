import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  async onSummit() {
    this.loginService.login(
      {
        email: this.emailFormControl.value.replace('@', '%40'),
        pass: this.passwordFormControl.value
      }
    );
  }

}
