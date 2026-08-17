import { Component } from '@angular/core';
import { Header } from '../header/header';
import { AdminModuleRoutingModule } from '../../admin-module/admin-module-routing-module';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, AdminModuleRoutingModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
