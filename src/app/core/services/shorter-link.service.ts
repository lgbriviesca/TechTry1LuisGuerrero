import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class ShorterLinkService {
  constructor(private request: RequestService) {}

  shortenLink(url: string) {
    console.log(url);
    return this.request.post(
      `https://api.shrtco.de/v2/shorten?url=${url}`,
      url
    );
  }
}
