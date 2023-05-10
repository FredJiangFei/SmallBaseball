using FluentValidation;

namespace SmallBaseball.Application.Commands
{
    public class RegisterCommandValidator : AbstractValidator<RegisterCommand>
    {
        public RegisterCommandValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty().WithMessage("First Name is required.");
            RuleFor(x => x.LastName).NotEmpty().WithMessage("Last Name is required.");
            RuleFor(x => x.Email).NotEmpty().WithMessage("Email is required.");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required.");
            RuleFor(x => x.PasswordConfirmation).NotEmpty().WithMessage("PasswordConfirmation is required.");
        }
    }
}
