import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

  /** Inicia la clase del objeto RolBGuard, que implementa la clase CanActivate.
   *
   * El constructor utiliza la clase Router para poder redireccionar.
   *
   * Protege las rutas: si el usuario ROL-A está en sesión, no permite acceder a las rutas del ROL-B:
   * Declara la constante rol, que toma del localStorage la clave rol, si su valor es ROL-B,
   * retorna true, de lo contrario, redirecciona a la ruta /home, a la cual sí puede acceder
   * tal usuario. 
   * 
   * Exporta la clase RolBGuard*/
@Injectable({
  providedIn: 'root',
})
export class RolBGuard implements CanActivate {
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
    if (rol === 'ROL-B') {
      return true;
    } else return this.router.navigate(['/home']);
  }
}
