using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Extensions
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services)
        {
            services.AddIdentity<AppUser, IdentityRole>(config =>
            {
                config.SignIn.RequireConfirmedEmail = false;
                config.User.RequireUniqueEmail = true;
                config.User.AllowedUserNameCharacters = null;
                config.Password.RequireDigit = true;
                config.Password.RequiredLength = 8;
                config.Password.RequireUppercase = false;
                config.Password.RequireNonAlphanumeric = false;
                config.Password.RequireLowercase = false;
            }).AddEntityFrameworkStores<DataContext>()
            .AddDefaultTokenProviders();

            return services;
        }
    }
}
