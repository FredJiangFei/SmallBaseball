using Microsoft.EntityFrameworkCore;
using SmallBaseball.Application.Queries;
using SmallBaseball.Infrastructure.Repository.EF;

public class DbContextInstaller : IInstaller
{
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection");
        services.AddSingleton(provider => new QuerySettings(connectionString));

        // Add services to the container.
        services.AddDbContext<DataContext>(options =>
        {
            options.UseMySql(
                connectionString, 
                ServerVersion.AutoDetect(connectionString)
            ).UseLazyLoadingProxies();
        });
    }
}