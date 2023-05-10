using FluentValidation;

namespace SmallBaseball.Application.Commands
{
    public class ResetPasswordCommandValidator : AbstractValidator<ResetPasswordCommand>
    {
        public ResetPasswordCommandValidator()
        {
            RuleFor(x => x.OldPassword).NotEmpty().WithMessage("OldPassword is required.");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required.");
            RuleFor(x => x.PasswordConfirmation).NotEmpty().WithMessage("PasswordConfirmation is required.");
        }
    }
}
