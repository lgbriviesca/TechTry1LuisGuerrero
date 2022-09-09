import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase del objeto BreakingbadService.
 *
 * El constructor utiliza la clase RoRequestServiceuter para poder interactuar con las APIS.
 * 
 * Implementa el método getCountries(), que RETORNA una petición GET a determinada API.
 * 
 * PARAMS: id tipo number.
 * 
 * Se le envía un id dinámico al endpoint para regresar determinado resultado
 * Sirve para poblar las citas del componente Quote.
 *
 * Exporta la clase BreakingbadService*/
export class BreakingbadService {
  constructor(private request: RequestService) {}

  getQuotes(id: number) {
    return this.request.get(`https://breakingbadapi.com/api/quotes/${id}`);
  }
}
