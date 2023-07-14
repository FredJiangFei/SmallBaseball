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

        public virtual TEntity Get(Guid id)
        {
            return _dbContext.Set<TEntity>().SingleOrDefault(x => x.Id == id);
        }

        public virtual IQueryable<TEntity> Query()
        {
            return _dbContext.Set<TEntity>();
        }

        public async Task CreateAsync(TEntity aggregateRoot)
        {
            await _dbContext.Set<TEntity>().AddAsync(aggregateRoot);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateAsync(TEntity aggregateRoot)
        {
            _dbContext.Set<TEntity>().Update(aggregateRoot);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync(TEntity aggregateRoot)
        {
            _dbContext.Set<TEntity>().Remove(aggregateRoot);
            await _dbContext.SaveChangesAsync();
        }
    }
}
