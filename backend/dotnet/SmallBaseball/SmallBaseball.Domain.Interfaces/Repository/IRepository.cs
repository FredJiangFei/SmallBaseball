using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Interfaces.Repository
{
    public interface IRepository<TEntity> where TEntity : IAggregateRoot, IEntity
    {
        TEntity Get(Guid id);

        Task CreateAsync(TEntity aggregateRoot);

        Task UpdateAsync(TEntity aggregateRoot);

        Task DeleteAsync(TEntity aggregateRoot);
    }
}
