﻿using MediatR;

namespace SmallBaseball.Application.Commands
{
    public interface ICommand<out TResponse> : IRequest<TResponse>
    {
    }

    public interface ICommand : IRequest
    {
    }
}
