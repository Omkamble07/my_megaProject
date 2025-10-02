import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Api {
  private base = 'https://api.example.com'; // <<< replace with real backend

  constructor(private http: HttpClient) {}

  uploadImage(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.base}/analyze`, formData);
  }

  getNearbyMarkets(lat: number, lng: number) {
    return this.http.get(`${this.base}/nearby?lat=${lat}&lng=${lng}`);
  }

  contactUs(payload: any) {
    return this.http.post(`${this.base}/contact`, payload);
  }
}
