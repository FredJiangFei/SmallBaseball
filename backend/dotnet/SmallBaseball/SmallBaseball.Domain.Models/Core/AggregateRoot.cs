using System.Collections.Generic;

namespace SmallBaseball.Domain.Models.Core
{
    public abstract class AggregateRoot : Entity, IAggregateRoot
    {
        private readonly List<IEvent> _domainEvents = new List<IEvent>();
        public IReadOnlyCollection<IEvent> DomainEvents => _domainEvents?.AsReadOnly();

        public void RaiseDomainEvent(IEvent @event)
        {
            _domainEvents.Add(@event);
        }

        public void ClearDomainEvents()
        {
            _domainEvents.Clear();
        }
    }
}