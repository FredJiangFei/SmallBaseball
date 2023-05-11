using System.Collections.Generic;

namespace SmallBaseball.Domain.Models.Core
{
    public interface IAggregateRoot : IEntity
    {
        IReadOnlyCollection<IEvent> DomainEvents { get; }
        void RaiseDomainEvent(IEvent @event);
        void ClearDomainEvents();
    }
}