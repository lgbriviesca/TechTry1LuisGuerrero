import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private login: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formLogin = new FormGroup({});
  }
  createForm() {
    this.formLogin = this.fb.group({
      rol: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.login
        .login(this.formLogin.value.rol, this.formLogin.value.password)
        .subscribe(
          (res: any) => {
            if (res.ok) {
              localStorage.setItem('login', res.ok);
              localStorage.setItem('rol', res.rol);
              this.router.navigate(['/home']);
            }
          },
          error => {
            console.error(error);
          }
        );
    }
  }

  ngOnInit(): void {
    this.createForm();
  }
}
