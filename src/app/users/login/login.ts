import { Component } from '@angular/core';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';

@Component({
  selector: 'app-login',
  imports: [AdminModuleRoutingModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
