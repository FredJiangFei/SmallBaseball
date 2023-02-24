using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public class GenericRepository<TEntity> : IRepository<TEntity> where TEntity : class, IAggregateRoot
    {
        private readonly DataContext _dbContext;

        public GenericRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task CreateAsync(TEntity aggregateRoot)
        {
            await _dbContext.Set<TEntity>().AddAsync(aggregateRoot);
            await _dbContext.SaveChangesAsync();
        }
    }
}
