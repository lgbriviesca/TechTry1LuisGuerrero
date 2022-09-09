import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root',
})
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
