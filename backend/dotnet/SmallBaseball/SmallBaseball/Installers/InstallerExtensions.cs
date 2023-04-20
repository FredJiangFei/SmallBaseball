namespace HeroesWebApiDemo.Installers;

public static class InstallerExtensions
{
    public static void InstallServicesFromAssembly(this IServiceCollection services, IConfiguration configuration)
    {
        var installers = typeof(Program).Assembly.ExportedTypes.Where(x => 
            typeof(IInstaller).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
            .Select(Activator.CreateInstance).Cast<IInstaller>().ToList();
        
        installers.ForEach(i => i.InstallServices(services, configuration));
    }
}
