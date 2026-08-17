import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-collections',
  imports: [Header, Footer],
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class Collections {}
