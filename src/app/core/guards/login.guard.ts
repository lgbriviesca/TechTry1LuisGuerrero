import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase LoginGuard, que implementa la clase CanActivate.
 *
 * El constructor utiliza la propiedad privada router, que se extiende de la clase Router para poder redireccionar.
 *
 * Protege las rutas: si el usuario no está en sesión, no permite acceder a las rutas:
 * Declara la constante isLoggedIn, que toma del localStorage la clave login, si su valor es true,
 * retorna dicho valor, de lo contrario, redirecciona al login
 *
 * Exporta la clase LoginGuard*/
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = localStorage.getItem('login');
    if (isLoggedIn) {
      return true;
    } else return this.router.navigate(['/login']);
  }
}
