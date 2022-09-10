import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase BookingsService.
 *
 * El constructor utiliza la propiedad privada request, que se extiende de la clase RequestService para poder interactuar con las APIS.
 *
 * Implementa el método getCountries(), que RETORNA una petición GET a determinada API.
 * Sirve para poblar la opciones de país del formulario de reserva.
 *
 * Exporta la clase BookingsService*/
export class BookingsService {
  constructor(private request: RequestService) {}

  getCountries() {
    return this.request.get(
      'https://api.first.org/data/v1/countries?region=africa&limit=10'
    );
  }
}
