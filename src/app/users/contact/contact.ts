import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FormsModule, NgForm } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  api = inject(Api);

  name: string = '';
  email: string = '';
  message: string = '';

  addTestimony(form: NgForm) {
    if (!form.valid) {
      alert('Fill all the fields correctly!');
      return;
    }

    this.api
      .addTestimonialsAPI({
        name: this.name,
        email: this.email,
        message: this.message,
      })
      .subscribe({
        next: (res: any) => {
          alert(
            `Thank you ${res.name} for your feedback! We appreciate your efforts to improve us!`,
          );

          form.resetForm();
        },

        error: (reason: any) => {
          console.error(reason);
          alert('Something went wrong!');
        },
      });
  }
}
