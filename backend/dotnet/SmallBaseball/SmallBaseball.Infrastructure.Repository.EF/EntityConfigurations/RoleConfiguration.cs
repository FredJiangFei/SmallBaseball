using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
            new IdentityRole
            {
                Name = UserRoles.User,
                NormalizedName = UserRoles.User
            },
            new IdentityRole
            {
                Name = UserRoles.Manager,
                NormalizedName = UserRoles.Manager
            },
            new IdentityRole
            {
                Name = UserRoles.Admin,
                NormalizedName = UserRoles.Admin
            });
        }
    }
}
