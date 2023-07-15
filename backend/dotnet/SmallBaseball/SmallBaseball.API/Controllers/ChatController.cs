using MediatR;
using Microsoft.AspNetCore.Mvc;
using SmallBaseball.API.Models;
using SmallBaseball.Application.Queries.Users;

namespace SmallBaseball.Controllers
{
    public class ChatController : BaseController
    {
        private readonly IMediator _mediator;

        public ChatController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("receivers/{receiverId}/history")]
        public async Task<ResponseResult> GetChatMessageHistory([FromRoute] Guid receiverId, [FromQuery] string chatType, [FromQuery] int pageNumber, [FromQuery] int pageSize)
        {
            var query = new GetChatMessageHistoryQuery
            {
                SenderId = UserId,
                ReceiverId = receiverId
            };
            var result = await _mediator.Send(query);
            return ResponseResult.FromValue(result);
        }
    }
}
