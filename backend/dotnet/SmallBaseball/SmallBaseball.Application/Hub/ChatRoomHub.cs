using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using SmallBase.Cache;
using SmallBaseball.Application.Commands.Users;
using SmallBaseball.Application.Models;
using SmallBaseball.Application.Models.Users;
using System.Reflection;
using System.Security.Claims;

namespace SmallBaseball.Application
{
    [Authorize]
    public class ChatRoomHub : Hub
    {
        private readonly ICacheService _cacheService;
        private readonly IMediator _mediator;

        public ChatRoomHub(ICacheService cacheService, IMediator mediator)
        {
            _cacheService = cacheService;
            _mediator = mediator;
        }

        public override Task OnConnectedAsync()
        {
            var userId = base.Context.User.FindFirstValue(ClaimTypes.Sid);
            this._cacheService.Add(userId, base.Context.ConnectionId);

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            var userId = base.Context.User.FindFirstValue(ClaimTypes.Sid);
            this._cacheService.Remove(userId, base.Context.ConnectionId);
            return base.OnDisconnectedAsync(exception);
        }

       
        public async Task SendPrivateMessage(string destUserId, string message)
        {
            string firstName = this.Context.User.FindFirstValue("FirstName");
            string lastName = this.Context.User.FindFirstValue("LastName");
            var userId = base.Context.User.FindFirstValue(ClaimTypes.Sid);
          
            var allConnectIds = this._cacheService.Get(destUserId);
            var myConnectIds = this._cacheService.Get(userId);

            await _mediator.Send(new SendMessageToUserCommand
            {
                Content = message,
                ReceiverId = Guid.Parse(destUserId),
                SenderId = Guid.Parse(userId)
            });

            await NotifyMessage(destUserId);

            foreach (var connectionId in allConnectIds.Concat(myConnectIds))
            {
                var msg = new ChatHistoryModel
                {
                    Id = Guid.NewGuid(),
                    SenderName = $"{firstName} {lastName}",
                    Content = message,
                };
                await base.Clients.Client(connectionId).SendAsync("ReceivePrivateMessage", userId, msg);
            }
        }

        public async Task NotifyMessage(string destUserId)
        {
            var allConnectIds = this._cacheService.Get(destUserId);
            foreach (var connectionId in allConnectIds)
            {
                await base.Clients.Client(connectionId).SendAsync("NotifyMessage");
            }
        }
    }
}
