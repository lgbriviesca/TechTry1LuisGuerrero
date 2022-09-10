import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase LoginService.
 *
 * El constructor utiliza la propiedad privada request, que se extiende de la clase RequestService para poder interactuar con las APIS.
 *
 * Implementa el método login(), que RETORNA una petición POST a determinada API.
 *
 * PARAMS: rol tipo string; password tipo string.
 *
 * Se le envía el objeto data al endpoint para regresar determinado resultado
 * Sirve para extraer los valores de rol y login para iniciar sesión en localStorage.
 *
 * Exporta la clase LoginService*/
export class LoginService {
  constructor(private request: RequestService) {}
  login(rol: string, password: string) {
    const data = { rol, password };
    return this.request.post(
      'https://atid-auth-test.herokuapp.com/api/users/auth',
      data
    );
  }
}
