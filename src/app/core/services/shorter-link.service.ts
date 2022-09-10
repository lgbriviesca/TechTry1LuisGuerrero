import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase ShorterLinkService.
 *
 * El constructor utiliza la propiedad privada request, que se extiende de la clase RequestService para poder interactuar con las APIS.
 *
 * Implementa el método shortenLink(), que RETORNA una petición POST a determinada API.
 *
 * PARAMS: url de tipo string.
 *
 * Se le envía una url dinámica al endpoint.
 * Sirve para acortar los enlaces. 
 *
 * Exporta la clase ShorterLinkService*/
export class ShorterLinkService {
  constructor(private request: RequestService) {}

  shortenLink(url: string) {
    return this.request.post(
      `https://api.shrtco.de/v2/shorten?url=${url}`,
      url
    );
  }
}
