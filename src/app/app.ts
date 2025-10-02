import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar],
  template: `
    <div class="min-vh-100 d-flex flex-column">
      <app-navbar></app-navbar>
      <main class="container mt-4 mb-5">
        <router-outlet></router-outlet>
      </main>
      <footer class="footer border-top bg-white">
        <div class="container">
          <small>© {{ year }} AgroSmart — Empowering farmers with smart harvest decisions.</small>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent {
  year = new Date().getFullYear();
}
