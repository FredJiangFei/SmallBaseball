using Microsoft.EntityFrameworkCore;
using SmallBaseball.Domain.Models.Aggregates.UserAggregate;

namespace SmallBaseball.Infrastructure.Repository.EF
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            base.OnConfiguring(options);
        }

        public DbSet<User> Users { get; set; }
    }
}
