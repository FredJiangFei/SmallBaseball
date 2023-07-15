using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SmallBaseball.Domain.Models.Aggregates.AthleteAggregate;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations.TodoEntities
{
    public class AthleteEntityConfiguration : IEntityTypeConfiguration<Athlete>
    {
        public void Configure(EntityTypeBuilder<Athlete> builder)
        {
            builder.Property(x => x.FirstName).IsRequired().HasColumnType("varchar(50)");
            builder.Property(x => x.LastName).IsRequired().HasColumnType("varchar(50)");
            builder.HasMany(x => x.Todos).WithOne().HasForeignKey(nameof(Todo.AthleteId)).OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(x => x.SendMessages).WithOne().HasForeignKey(nameof(ChatMessage.SenderId)).OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(x => x.ReceiveMessages).WithOne().HasForeignKey(nameof(ChatMessage.ReceiverId)).OnDelete(DeleteBehavior.Cascade);
            builder.HasMany(x => x.ChatList).WithOne().HasForeignKey(nameof(ChatListItem.UserId)).OnDelete(DeleteBehavior.Cascade);
            builder.BuildEntity();
            builder.ToTable("Athletes");
        }
    }
}
