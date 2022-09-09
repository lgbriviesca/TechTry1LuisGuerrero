import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class BreakingbadService {
  constructor(private request: RequestService) {}

  getQuotes(id: number) {
    return this.request.get(`https://breakingbadapi.com/api/quotes/${id}`);
  }
}
