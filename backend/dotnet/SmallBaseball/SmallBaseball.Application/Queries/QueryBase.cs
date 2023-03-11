using MySqlConnector;
using System.Data;

namespace Elyte.Application.Queries
{
    public abstract class QueryBase<T> where T : QuerySettings
    {
        protected T Settings { get; private set; }
        protected QueryBase(T settings)
        {
            Settings = settings;
        }

        protected TOut Execute<TOut>(Func<IDbConnection, TOut> func)
        {
            using (var connection = new MySqlConnection(Settings.ConnectionString))
            {
                return func.Invoke(connection);
            }
        }

        protected async Task<TOut> ExecuteAsync<TOut>(Func<IDbConnection, Task<TOut>> func)
        {
            using (var connection = new MySqlConnection(Settings.ConnectionString))
            {
                return await func.Invoke(connection);
            }
        }
    }

    public abstract class QueryBase : QueryBase<QuerySettings>
    {
        protected QueryBase(QuerySettings settings) : base(settings)
        {
        }
    }
}
