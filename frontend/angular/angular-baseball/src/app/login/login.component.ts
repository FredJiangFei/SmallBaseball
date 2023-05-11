import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { LoginCommand } from '../_commands/login.command';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: LoginCommand = {
    email: '',
    password: '',
  };
  logining: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  login() {
    this.logining = true;
    this.authService
      .login(this.user)
      .pipe(finalize(() => (this.logining = false)))
      .subscribe((_) => {
        if (this.authService.LoggedIn()) {
          const returnUrl =
            this.activedRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
      });
  }
}
