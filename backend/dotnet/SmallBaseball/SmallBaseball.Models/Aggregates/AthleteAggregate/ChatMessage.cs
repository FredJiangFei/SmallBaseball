using SmallBaseball.Domain.Models.Core;
using System;

namespace SmallBaseball.Domain.Models.Aggregates.AthleteAggregate
{
    public class ChatMessage : Entity
    {
        public Guid SenderId { get; set; }
        public Guid ReceiverId { get; set; }
        public string Content { get; set; }
        public bool IsRead { get; set; }

        public static ChatMessage Create(Guid senderId, Guid receiver, string content)
        {
            return new ChatMessage
            {
                SenderId = senderId,
                Content = content,
                ReceiverId = receiver
            };
        }

        public void MarkAsRead()
        {
            IsRead = true;
        }
    }
}
