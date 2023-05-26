import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginCommand } from '../_commands/login.command';
import { RegisterCommand } from '../_commands/register.command';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ChangePasswordCommand } from '../_commands/changePassword.command';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtService = new JwtHelperService();
  constructor(private http: HttpClient) {}

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtService.isTokenExpired(token);
  }

  loggedUser(): User | null {
    const token: any = localStorage.getItem('token');
    const user = this.jwtService.decodeToken<User>(token);
    return user;
  }

  login(user: LoginCommand) {
    return this.http
      .post<User>(`${environment.baseUrl}/users/login`, user)
      .pipe(
        tap((res: any) => {
          localStorage.setItem('token', res.value.token);
        })
      );
  }

  register(user: RegisterCommand) {
    return this.http.post(`${environment.baseUrl}/users/register`, user);
  }

  changePassword(command: ChangePasswordCommand) {
    return this.http.put(`${environment.baseUrl}/users/reset-password`, command);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
