using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using SmallBase.Cache;
using SmallBaseball.Application.Models;
using System.Security.Claims;

namespace SmallBaseball.Application
{
    [Authorize]
    public class ChatRoomHub : Hub
    {
        private readonly ICacheService _cacheService;

        public ChatRoomHub(ICacheService cacheService)
        {
            _cacheService = cacheService;
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

        public Task SendMessage(string message)
        {
            string firstName = this.Context.User.FindFirstValue("FirstName");
            string lastName = this.Context.User.FindFirstValue("LastName");
            var msg = new MessageModel
            {
                Id = Guid.NewGuid(),
                Message = $"{firstName} {lastName} {DateTime.Now}:{message}",
            };

            return Clients.All.SendAsync("ReceiveMessage", msg);
        }

        public async Task SendPrivateMessage(string destUserId, string message)
        {
            string firstName = this.Context.User.FindFirstValue("FirstName");
            string lastName = this.Context.User.FindFirstValue("LastName");
            var userId = base.Context.User.FindFirstValue(ClaimTypes.Sid);
          
            var allConnectIds = this._cacheService.Get(destUserId);
            var myConnectIds = this._cacheService.Get(userId);

            foreach (var connectionId in allConnectIds.Concat(myConnectIds))
            {
                var msg = new MessageModel
                {
                    Id = Guid.NewGuid(),
                    Message = $"{firstName} {lastName} {DateTime.Now}:{message}",
                };
                await base.Clients.Client(connectionId).SendAsync("ReceivePrivateMessage", userId, msg);
            }
        }
    }
}
