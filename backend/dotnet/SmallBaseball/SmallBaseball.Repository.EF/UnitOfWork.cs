using MediatR;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public sealed class UnitOfWork : IUnitOfWork
    {
        public readonly DataContext _dbContext;
        private readonly IMediator _mediator;

        public UnitOfWork(DataContext dbContext, IMediator mediator)
        {
            _dbContext = dbContext;
            _mediator = mediator;
        }

        public async Task<bool> CommitAsync(CancellationToken cancellationToken = default)
        {
            if (!_dbContext.ChangeTracker.HasChanges()) return false;
            await DispatchDomainEventsAsync();
            var result = await _dbContext.SaveChangesAsync(cancellationToken);
            return result > 0;
        }

        private async Task DispatchDomainEventsAsync()
        {
            var domainEntities = _dbContext.ChangeTracker.Entries<IAggregateRoot>().Where(x => x.Entity.DomainEvents?.Any() == true);

            var domainEvents = domainEntities.SelectMany(x => x.Entity.DomainEvents);

            foreach (var entity in domainEntities)
            {
                entity.Entity.ClearDomainEvents();
            }

            foreach (var domainEvent in domainEvents)
            {
                await _mediator.Publish(domainEvent);
            }
        }

        public void Dispose()
        {
            _dbContext?.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
