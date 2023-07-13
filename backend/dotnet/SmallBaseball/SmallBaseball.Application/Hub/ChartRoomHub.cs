using Microsoft.AspNetCore.SignalR;

namespace SmallBaseball.Application
{
    public class ChartRoomHub : Hub
    {
       public Task SendMessage(string message)
        {
            string connId = this.Context.ConnectionId;
            string msg = $"{connId} : {message}";
            return Clients.All.SendAsync("ReceiveMessage", msg);
        }
    }
}
