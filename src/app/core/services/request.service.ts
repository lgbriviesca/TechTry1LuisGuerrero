import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}
  post(url: string, data: any) {
    return this.http.post(url, data);
  }
  get(url: string, data?: any) {
    return this.http.get(url);
  }
}
