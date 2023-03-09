using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SmallBaseball.FunctionalTests
{
    public class TestStartup
    {
        public IConfiguration Configuration { get; }

        public TestStartup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            var builder = new ContainerBuilder();

            builder.Populate(services);
            var container = builder.Build();
            return new AutofacServiceProvider(container);
        }
    }
}
