﻿namespace SmallBaseball.Application.Commands
{
    public class LoginAdminCommand : ICommand<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
