using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SmallBaseball.Domain.Models.Aggregates.TeamAggregate;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations.TeamEntities
{
    public class TeamEntityConfiguration : IEntityTypeConfiguration<Team>
    {
        public void Configure(EntityTypeBuilder<Team> builder)
        {
            builder.Property(x => x.Name).IsRequired().HasColumnType("varchar(200)");
            builder.Property(x => x.SportType).IsRequired().HasColumnType("varchar(20)");
            builder.BuildEntity();
            builder.ToTable("Teams");
        }
    }
}
