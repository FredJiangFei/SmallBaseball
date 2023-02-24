using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmallBaseball.Application.Queries
{
    public interface IQuery<out TResponse> : IRequest<TResponse>
    {
    }
}
