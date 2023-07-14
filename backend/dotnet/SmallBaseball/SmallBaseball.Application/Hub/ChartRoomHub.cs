using Microsoft.AspNetCore.SignalR;
using SmallBaseball.Application.Models;

namespace SmallBaseball.Application
{
    public class ChartRoomHub : Hub
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
            string connId = this.Context.ConnectionId;
            var msg = new MessageModel
            {
                Id = Guid.NewGuid(),
                Message = message,
            };

            return Clients.All.SendAsync("ReceiveMessage", msg);
        }
    }
}
