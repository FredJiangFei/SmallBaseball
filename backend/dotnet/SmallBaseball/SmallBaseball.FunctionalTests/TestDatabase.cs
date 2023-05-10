using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SmallBaseball.Domain.Models.Core;
using System.Collections;

namespace SmallBaseball.FunctionalTests
{
    public class TestDatabase<T>  where T : DbContext
    {
        private readonly T _context = default;
        private readonly IServiceScope _scope;
        public TestDatabase(IServiceProvider serviceProvider)
        {
            _scope = serviceProvider.CreateScope();
            _context = _scope.ServiceProvider.GetRequiredService<T>();
        }

        public void SetUp(params object[] entities)
        {
            if (!entities.Any()) return;
            var records = entities.SelectMany(x => ParseEntity(x));
            var types = records.Select(x => x.GetType());
            Clear(types.ToArray());
            Init(records);
        }

        public void Clear(params Type[] types)
        {
            var tables = GetTableNames(types.Distinct());
            var connection = _context.Database.GetDbConnection();
            var sql = string.Concat(tables.Select(x => $"TRUNCATE TABLE {x};"));
            sql = $"SET FOREIGN_KEY_CHECKS = 0; {sql} SET FOREIGN_KEY_CHECKS = 1;";
            connection.Execute(sql);
        }

        public TEntity Get<TEntity>(Guid id) where TEntity : Entity
        {
            return _context.Set<TEntity>().FirstOrDefault(x => x.Id == id);
        }

        public IQueryable<TEntity> Query<TEntity>() where TEntity : class
        {
            return _context.Set<TEntity>();
        }

        public void ClearAll()
        {
            var connection = _context.Database.GetDbConnection();
            var tables = connection.Query<string>($"SELECT table_name FROM information_schema.tables WHERE table_schema='{connection.Database}'");
            var sql = string.Concat(tables.Select(x => $"TRUNCATE TABLE {x};"));
            sql = $"SET FOREIGN_KEY_CHECKS = 0; {sql} SET FOREIGN_KEY_CHECKS = 1;";
            connection.Execute(sql);
        }

        public static void SetUpDatabase()
        {
            using (var scope = TestHost.Server.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<T>();
                context.Database.EnsureCreated();
            }
        }

        public static void TeardownDatabase()
        {
            using (var scope = TestHost.Server.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<T>();
                context.Database.EnsureDeleted();
            }
        }

        private IEnumerable<object> ParseEntity(object entity)
        {
            var isEnumerable = entity.GetType().IsAssignableTo(typeof(IEnumerable));
            if (isEnumerable) return Enumerable.OfType<object>((IEnumerable)entity);
            return new object[] { entity };
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

        private IEnumerable<string> GetTableNames(IEnumerable<Type> types)
        {
            var models = _context.Model;
            var entityTypes = models.GetEntityTypes().Where(t => types.Contains(t.ClrType));
            return entityTypes.Select(x => x.GetTableName());
        }

        public void Dispose()
        {
            _context.Dispose();
            _scope?.Dispose();
        }
    }
}
