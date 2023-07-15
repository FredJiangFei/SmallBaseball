using SmallBaseball.Domain.Models.Aggregates.AthleteAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations.AthleteEntities
{
    public class ChatMessageEntityConfiguration : IEntityTypeConfiguration<ChatMessage>
    {
        public void Configure(EntityTypeBuilder<ChatMessage> builder)
        {
            builder.Property(x => x.SenderId).IsRequired().HasMaxLength(36);
            builder.Property(x => x.ReceiverId).IsRequired().HasMaxLength(36);
            builder.Property(x => x.Content).IsRequired().HasColumnType("varchar(500)");
            builder.Property(x => x.IsRead).IsRequired();
            builder.BuildEntity();
            builder.ToTable("ChatMessages");
        }
    }
}
