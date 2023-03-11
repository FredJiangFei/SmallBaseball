namespace Elyte.Application.Queries
{
    public class QuerySettings
    {
        public QuerySettings(string connectionString)
        {
            ConnectionString = connectionString;
        }
        public string ConnectionString { get; set; }
    }
}
