import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.html',
  styleUrls: ['./upload.css']
})
export class Upload{
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  lat: number | null = null;
  lng: number | null = null;
  uploading = false;

  constructor(private api: Api) {}

  onFileChange(event: any) {
    const file = event.target.files?.[0];
    if (!file) return;
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => this.previewUrl = reader.result;
    reader.readAsDataURL(file);
  }

  getLocation() {
    if (!navigator.geolocation) { alert('Geolocation not available'); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }, err => alert('Permission denied or error getting location'));
  }

  submit() {
    if (!this.selectedFile) { alert('Choose an image first'); return; }
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    if (this.lat && this.lng) { fd.append('latitude', String(this.lat)); fd.append('longitude', String(this.lng)); }

    this.uploading = true;
    this.api.uploadImage(fd).subscribe({
      next: (res: any) => {
        this.uploading = false;
        sessionStorage.setItem('latest-result', JSON.stringify(res));
        window.location.href = '/dashboard';
      },
      error: () => { this.uploading = false; alert('Upload failed — backend not configured.'); }
    });
  }
}
