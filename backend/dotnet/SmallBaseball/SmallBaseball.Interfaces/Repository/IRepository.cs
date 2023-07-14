
using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Domain.Interfaces.Repository
{
    public interface IRepository<TEntity> where TEntity : IAggregateRoot, IEntity
    {
        TEntity Get(Guid id);
        IQueryable<TEntity> Query();
        Task CreateAsync(TEntity aggregateRoot);
        Task UpdateAsync(TEntity aggregateRoot);
        Task DeleteAsync(TEntity aggregateRoot);

    }
}
