using MediatR;
using System;

namespace SmallBaseball.Application.Commands
{
    public class ResetPasswordCommand : ICommand<bool>
    {
        public Guid UserId { get; set; }
        public string OldPassword { get; set; }
        public string Password { get; set; }
        public string PasswordConfirmation { get; set; }
    }
}
