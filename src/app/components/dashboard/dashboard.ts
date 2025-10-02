import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  result: any | null = null;

  ngOnInit() {
    const raw = sessionStorage.getItem('latest-result');
    if (raw) { this.result = JSON.parse(raw); }
  }

  download() {
    if (!this.result) return;
    const blob = new Blob([JSON.stringify(this.result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'agrosmart-result.json'; a.click();
    URL.revokeObjectURL(url);
  }
}
