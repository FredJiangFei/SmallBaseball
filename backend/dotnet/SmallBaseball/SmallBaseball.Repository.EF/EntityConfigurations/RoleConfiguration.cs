using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        private const string adminId = "2301D884-221A-4E7D-B509-0113DCC043E1";
        private const string userId = "7D9B7113-A8F8-4035-99A7-A20DD400F6A3";
        private const string managerId = "78A7570F-3CE5-48BA-9461-80283ED1D94D";

        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
            new IdentityRole
            {
                Id = userId,
                Name = UserRoles.User,
                NormalizedName = UserRoles.User
            },
            new IdentityRole
            {
                Id = managerId,
                Name = UserRoles.Manager,
                NormalizedName = UserRoles.Manager
            },
            new IdentityRole
            {
                Id = adminId,
                Name = UserRoles.Admin,
                NormalizedName = UserRoles.Admin
            });
        }
    }
}