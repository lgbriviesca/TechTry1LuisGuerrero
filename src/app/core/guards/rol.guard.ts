import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

/** Inicia la clase RolAGuard, que implementa la clase CanActivate.
 *
 * El constructor utiliza la propiedad privada router, que se extiende de la clase Router para poder redireccionar.
 *
 * Protege las rutas: si el usuario ROL-B está en sesión, no permite acceder a las rutas del ROL-A:
 * Declara la constante rol, que toma del localStorage la clave rol, si su valor es ROL-A,
 * retorna true, de lo contrario, redirecciona a la ruta /shorterlink, a la cual sí puede acceder
 * tal usuario.
 *
 * Exporta la clase RolAGuard*/
@Injectable({
  providedIn: 'root',
})
export class RolAGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const rol = localStorage.getItem('rol');
    if (rol === 'ROL-A') {
      return true;
    } else return this.router.navigate(['/shorterlink']);
  }
}
