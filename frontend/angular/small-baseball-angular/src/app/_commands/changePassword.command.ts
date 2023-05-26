export interface ChangePasswordCommand {
  oldPassword: string;
  password: string;
  passwordConfirmation: string;
}
