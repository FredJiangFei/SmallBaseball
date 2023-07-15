using SmallBase.Cache;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Application.Commands.Users.SendMessageToUser
{
    public class SendMessageToUserCommandHandler : ICommandHandler<SendMessageToUserCommand, bool>
    {
        private readonly IRepository<Athlete> _athleteRepository;
        private readonly ICacheService _cacheService;
        public SendMessageToUserCommandHandler(IRepository<Athlete> athleteRepository, ICacheService cacheService)
        {
            _athleteRepository = athleteRepository;
            _cacheService = cacheService;
        }

        public async Task<bool> Handle(SendMessageToUserCommand request, CancellationToken cancellationToken)
        {
            var sender = _athleteRepository.Get(request.SenderId);
            var receiver = _athleteRepository.Get(request.ReceiverId);

            sender.SendMessageToUser(request.ReceiverId, request.Content);


            await _athleteRepository.UpdateRangeAsync(sender, receiver);
            return true;
        }

        //public async Task<bool> Handle(SendMessageToUserCommand request, CancellationToken cancellationToken)
        //{
        //    //var chatRecordId = sender.SendMessageToUser(request.ReceiverId, request.Content);

        //    //receiver.AddUserToChatList(sender.Id, chatRecordId);

        //    //await _athleteRepository.UpdateRangeAsync(sender, receiver);

        //    return true;
        //}
    }
}
