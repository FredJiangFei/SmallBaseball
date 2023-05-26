import { AlertifyService } from './../_utils/alertify.service';
import { Component } from '@angular/core';
import { ChangePasswordCommand } from '../_commands/changePassword.command';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  command: ChangePasswordCommand = {
    oldPassword: '',
    password: '',
    passwordConfirmation: '',
  };

  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService
  ) {}

  changePassword() {
    this.authService.changePassword(this.command).subscribe((_) => {
      this.alertifyService.success('Change password successfully');
    });
  }
}
