using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SmallBaseball.Infrastructure.Repository.EF.EntityConfigurations
{
    public class UserConfiguration : IEntityTypeConfiguration<AppUser>
    {
        private const string adminId = "B22698B8-42A2-4115-9631-1C2D1E2AC5F7";

        public void Configure(EntityTypeBuilder<AppUser> builder)
        {
            var admin = new AppUser
            {
                Id = adminId,
                UserName = "admin",
                NormalizedUserName = "ADMIN",
                Email = "Admin@sbb.com",
                NormalizedEmail = "ADMIN@SBB.COM",
                PhoneNumber = "17792387996",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true,
                SecurityStamp = new Guid().ToString("D")
            };

            admin.PasswordHash = PassGenerate(admin);

            builder.HasData(admin);
        }

        public string PassGenerate(AppUser user)
        {
            var passHash = new PasswordHasher<AppUser>();
            return passHash.HashPassword(user, "password");
        }
    }
}
