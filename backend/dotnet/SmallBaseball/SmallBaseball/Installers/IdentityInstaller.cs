using Microsoft.AspNetCore.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

public class IdentityInstaller : IInstaller
{
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
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
    }
}