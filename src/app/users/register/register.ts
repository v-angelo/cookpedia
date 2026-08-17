import { Component } from '@angular/core';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';

@Component({
  selector: 'app-register',
  imports: [AdminModuleRoutingModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
