using MediatR;

namespace SmallBaseball.Application.Queries
{
    public interface IQuery<out TResponse> : IRequest<TResponse>
    {
    }
}
