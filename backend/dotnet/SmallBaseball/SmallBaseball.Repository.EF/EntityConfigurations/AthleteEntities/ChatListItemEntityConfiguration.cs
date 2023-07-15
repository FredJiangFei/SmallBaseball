using SmallBaseball.Domain.Models.Aggregates.AthleteAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations.AthleteEntities
{
    public class ChatListItemEntityConfiguration : IEntityTypeConfiguration<ChatListItem>
    {
        public void Configure(EntityTypeBuilder<ChatListItem> builder)
        {
            builder.Property(x => x.UserId).IsRequired().HasMaxLength(36);
            builder.Property(x => x.ChatObjectId).IsRequired().HasMaxLength(36);
            builder.Property(x => x.LastChatRecordId).IsRequired().HasMaxLength(36);
            builder.BuildEntity();
            builder.ToTable("ChatListItems");
        }
    }
}
