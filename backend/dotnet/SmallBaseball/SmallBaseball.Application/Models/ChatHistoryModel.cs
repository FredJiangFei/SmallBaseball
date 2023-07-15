using System;

namespace SmallBaseball.Application.Models.Users
{
    public class ChatHistoryModel
    {
        public Guid Id { get; set; }
        public Guid SenderId { get; set; }
        public string SenderName { get; set; }
        public string Content { get; set; }
        public bool IsSender { get; set; }
        public string CreatedDate { get; set; }
    }
}
