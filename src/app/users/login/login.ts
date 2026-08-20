import { Component, inject } from '@angular/core';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-login',
  imports: [AdminModuleRoutingModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  api = inject(Api);

  loginForm: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(`[a-zA-Z0-9]*`)]],
    });
  }

  handleLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      console.log(email, password);

      this.api.loginAPI({ email, password }).subscribe({
        next: (res: any) => {
          console.log(res);
          alert(`Hi ${res.data.user.username}, Welcome to Cookpedia! `);

          sessionStorage.setItem('user', JSON.stringify(res.data.user));
          sessionStorage.setItem('token', res.data.token);

          if (res.data.user.role === 'admin') {
            this.router.navigateByUrl('/admin');
          }
        },
        error: (reason: any) => {
          console.log(reason);
        },
      });
    }
  }
}
