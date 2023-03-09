using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Collections;
using Dapper;

namespace SmallBaseball.FunctionalTests
{
    public class TestData<T> : IDisposable where T : DbContext
    {
        private T _context = null;
        private IServiceScope _scope;
        public TestData(IServiceProvider serviceProvider)
        {
            _scope = serviceProvider.CreateScope();
            _context = _scope.ServiceProvider.GetRequiredService<T>();
        }

        public void SetUp(params object[] entities)
        {
            if (!entities.Any()) return;
            var records =  entities.SelectMany(x => ParseEntity(x));
            var types = records.Select(x => x.GetType());
            Clear(types.ToArray());
            Init(records);
        }

        private IEnumerable<object> ParseEntity(object entity)
        {
            var isEnumerable = entity.GetType().IsAssignableTo(typeof(IEnumerable));
            if (isEnumerable) return Enumerable.OfType<object>((IEnumerable)entity);
            return new object[] { entity };
        }

        public void Clear(params Type[] types)
        {
            var tables = GetTableNames(types.Distinct());
            var connection = _context.Database.GetDbConnection();
            var sql = string.Concat(tables.Select(x => $"DELETE FROM [{x}];"));
            connection.Execute(sql);
        }

        private IEnumerable<string> GetTableNames(IEnumerable<Type> types)
        {
            var models = _context.Model;
            var entityTypes = models.GetEntityTypes().Where(t => types.Contains(t.ClrType));
            return entityTypes.Select(x => x.GetTableName());
        }

        public IQueryable<TEntity> Query<TEntity>() where TEntity : class
        {
            return _context.Set<TEntity>();
        }

        public static void SetUpDatabase()
        {
            using (var scope = TestHost.Server.Host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<T>();
                context.Database.EnsureCreated();
            }
        }

        public static void TeardownDatabase()
        {
            using (var scope = TestHost.Server.Host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<T>();
                context.Database.EnsureDeleted();
            }
        }

        public void Dispose()
        {
            _context.Dispose();
            _context = null;
            _scope?.Dispose();
            _scope = null;
        }

        private void Init(IEnumerable<object> entities)
        {
            using (var scope = _scope.ServiceProvider.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<T>();
                context.AddRange(entities);
                context.SaveChanges();
            }
        }
    }
}
