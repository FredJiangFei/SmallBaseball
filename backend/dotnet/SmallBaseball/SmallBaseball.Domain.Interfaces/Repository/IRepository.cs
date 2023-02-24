using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Interfaces.Repository
{
    public interface IRepository<TEntity> where TEntity : IAggregateRoot, IEntity
    {
        Task CreateAsync(TEntity aggregateRoot);
    }
}
