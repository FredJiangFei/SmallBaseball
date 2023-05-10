using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SmallBaseball.Application.Identity;
using SmallBaseball.Infrastructure.Repository.EF;

public class AuthenticationInstaller : IInstaller
{
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {
        var jwtSettings = configuration.GetSection(nameof(JwtSettings)).Get<JwtSettings>();
        services.AddSingleton(jwtSettings);

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

        var tokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings.Issuer,
            ValidAudience = jwtSettings.Audience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key))
        };

        services.AddAuthentication(opt =>
        {
            opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = tokenValidationParameters;
        });

        services.AddScoped<IJwtTokenService, JwtTokenService>();
    }
}