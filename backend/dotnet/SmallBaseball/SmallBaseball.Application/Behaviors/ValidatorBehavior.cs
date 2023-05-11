using FluentValidation;
using MediatR;
using SmallBaseball.Application.Commands;

namespace SmallBaseball.Application.Behaviors
{
    public sealed class ValidationBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse> where TRequest : class, ICommand<TResponse>
    {
        private readonly IEnumerable<IValidator<TRequest>> _validators;

        public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators) => _validators = validators;

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            var errors = _validators.Select(x => x.Validate(request)).SelectMany(x => x.Errors).Where(x => x != null);
            if (errors.Any())
            {
                throw new Exceptions.ModelValidationException($"Your request contains the invalid data, please check and try again.")
                {
                    Errors = errors.Select(x => KeyValuePair.Create(x.PropertyName, x.ErrorMessage)).ToList()
                };
            }

            return await next();
        }
    }
}
