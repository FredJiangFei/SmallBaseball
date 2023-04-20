using FluentValidation;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Infrastructure.Repository.EF;
using SmallBaseball.Application.Commands;

public class ApplicationServicesInstaller : IInstaller
{
    public void InstallServices(IServiceCollection services, IConfiguration configuration)
    {
        services.AddValidatorsFromAssembly(typeof(RegisterCommandValidator).Assembly);
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));
    }
}