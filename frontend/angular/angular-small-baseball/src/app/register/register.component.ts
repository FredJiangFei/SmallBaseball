import { finalize } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RegisterCommand } from '../_commands/register.command';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: RegisterCommand = {
    firstName: 'Fred',
    lastName: 'Jiang',
    email: 'fred@qq.com',
    password: 'aa123456',
    passwordConfirmation: 'aa123456',
  };
  logining: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.logining = true;
    this.authService
      .register(this.user)
      .pipe(finalize(() => (this.logining = false)))
      .subscribe((_) => {
        this.router.navigate(['/']);
      });
  }
}
