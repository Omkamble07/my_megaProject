import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.html'
})
export class ContactUs {
  contactForm: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder, private api: Api) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  
  send() {
    if (this.contactForm.invalid) return;
    this.api.contactUs(this.contactForm.value).subscribe({
      next: () => { alert('Message sent — we will contact you soon.'); this.contactForm.reset(); },
      error: () => alert('Failed to send.')
    });
  }
}
