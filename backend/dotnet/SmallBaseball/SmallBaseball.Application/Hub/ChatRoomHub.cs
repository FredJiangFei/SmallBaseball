using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using SmallBaseball.Application.Models;
using System.Security.Claims;

namespace SmallBaseball.Application
{
    [Authorize]
    public class ChatRoomHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
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
    }
}
