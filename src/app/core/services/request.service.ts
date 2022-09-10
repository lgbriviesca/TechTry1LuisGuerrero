import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase RequestService.
 *
 * El constructor utiliza la propiedad privada http, que se extiende de la clase HttpClient para poder enviar peticiones HTTP.
 *
 * Implementa el método post(), que consturye una petición POST, la cual interpreta el cuerpo de la petición como JSON y recibe la respuesta
 * traducida de JSON.
 *
 * PARAMS: url tipo string; data tipo any.
 *
 * Se envía el string url para acceder al endpoint al que se le hace la petición.
 * Se le envía el objeto data al endpoint para regresar determinado resultado
 *
 * Implementa el método get(), que consturye una petición GET,  la cual interpreta el cuerpo de la petición como JSON y recibe la respuesta
 * traducida de JSON.
 *
 * PARAMS: url tipo string; data(opcional) tipo any.
 *
 * Se envía el string url para acceder al endpoint al que se le hace la petición.
 * (Opcional)Se le envía el objeto data al endpoint para acceder a determinado endpoint
 *
 * Exporta la clase RequestService*/
export class RequestService {
  constructor(private http: HttpClient) {}
  post(url: string, data: any) {
    return this.http.post(url, data);
  }
  get(url: string, data?: any) {
    return this.http.get(url);
  }
}
