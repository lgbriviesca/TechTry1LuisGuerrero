import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  constructor(private request: RequestService) {}

  getCountries() {
    return this.request.get(
      'https://api.first.org/data/v1/countries?region=africa&limit=10'
    );
  }
}
