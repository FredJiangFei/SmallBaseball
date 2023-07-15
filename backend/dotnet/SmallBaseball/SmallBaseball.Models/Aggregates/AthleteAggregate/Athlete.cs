using SmallBaseball.Domain.Models.Aggregates.AthleteAggregate;
using SmallBaseball.Domain.Models.Core;
using SmallBaseball.Domain.Models.Exceptions;

namespace SmallBaseball.Domain.Models.Aggregates.TodoAggregate
{
    public class Athlete : AggregateRoot
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual List<Todo> Todos { get; set; } = new List<Todo>();
        public virtual List<ChatMessage> SendMessages { get; set; } = new List<ChatMessage>();
        public virtual List<ChatMessage> ReceiveMessages { get; set; } = new List<ChatMessage>();
        public virtual List<ChatListItem> ChatList { get; set; } = new List<ChatListItem>();

        public static Athlete Create(string firstName, string lastName)
        {
            return new Athlete
            {
                FirstName = firstName,
                LastName = lastName
            };
        }

        public void AddTodo(string title)
        {
            var todo = Todo.Create(title);
            Todos.Add(todo);
        }

        public void DeleteTodo(Guid id)
        {
            var todo = Todos.Find(x => x.Id == id);
            Todos.Remove(todo);
        }

        public Guid SendMessageToUser(Guid receiverId, string content)
        {
            var chatMessage = ChatMessage.Create(this.Id, receiverId, content);
            this.AddUserToChatList(receiverId, chatMessage.Id);
            this.SendMessages.Add(chatMessage);
            return chatMessage.Id;
        }

        public void AddUserToChatList(Guid chatUserId, Guid lastChatRecordId)
        {
            var chatUser = this.ChatList.Find(x => x.UserId == this.Id && x.ChatObjectId == chatUserId);
            if (chatUser == null)
            {
                this.ChatList.Add(ChatListItem.Create(this.Id, chatUserId, lastChatRecordId));
            }
            else
            {
                chatUser.LastChatRecordId = lastChatRecordId;
            }
        }

        public void ToggleTodo(Guid id)
        {
            var todo = Todos.Find(x => x.Id == id);
            todo.Toggle();
        }
    }
}
