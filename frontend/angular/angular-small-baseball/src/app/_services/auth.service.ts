import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginCommand } from '../_commands/login.command';
import { RegisterCommand } from '../_commands/register.command';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtService = new JwtHelperService();
  constructor(private http: HttpClient) { }

  LoggedIn() {
    const token = localStorage.getItem('token');
    return true; //!this.jwtService.isTokenExpired(token);
  }

  LoggedUser(): User {
    const user: any = localStorage.getItem('loginUser');
    return JSON.parse(user);
  }

  login(user: LoginCommand) {
    return this.http.post<User>(`${environment.baseUrl}/users/login`, user)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('loginUser', JSON.stringify(response.user));
        })
      );
  }

  register(user: RegisterCommand) {
    return this.http.post(`${environment.baseUrl}/users/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loginUser');
  }
}
