using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations.TodoEntities
{
    public class TodoEntityConfiguration : IEntityTypeConfiguration<Todo>
    {
        public void Configure(EntityTypeBuilder<Todo> builder)
        {
            builder.Property(x => x.Title).IsRequired().HasColumnType("varchar(200)");
            builder.BuildEntity();
            builder.ToTable("Todos");
        }
    }
}
