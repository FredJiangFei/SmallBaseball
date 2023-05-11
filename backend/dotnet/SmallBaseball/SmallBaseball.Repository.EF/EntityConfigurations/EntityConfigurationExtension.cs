using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SmallBaseball.Domain.Models.Core;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations
{
    internal static class EntityConfigurationExtension
    {
        public static void BuildEntity<TEntity>(this EntityTypeBuilder<TEntity> builder) where TEntity : Entity
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired().HasMaxLength(36).ValueGeneratedNever();
            builder.Property(x => x.CreatedDate).IsRequired().HasColumnType("datetime");
            builder.Property(x => x.UpdatedDate).IsRequired().HasColumnType("datetime");
        }
    }
}
