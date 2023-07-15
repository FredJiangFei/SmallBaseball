using MediatR;
using System;

namespace SmallBaseball.Application.Commands.Users
{
    public class SendMessageToUserCommand : ICommand<bool>
    {
        public Guid SenderId { get; set; }
        public Guid ReceiverId { get; set; }
        public string Content { get; set; }
    }
}
