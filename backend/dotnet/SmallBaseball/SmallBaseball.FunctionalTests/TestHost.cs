using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework.Internal;
using SmallBaseball.API.Middlewares;
using SmallBaseball.Infrastructure.Repository.EF;
using System.Reflection;

namespace SmallBaseball.FunctionalTests
{
    [SetUpFixture]
    public class TestHost
    {
        public static TestServer Server = CreateServer();
        public static TestExecutionContext TestContext { get; set; }
        private static TestServer CreateServer()
        {
            var application = new WebApplicationFactory<Program>().WithWebHostBuilder(builder =>
            {
                var path = Assembly.GetAssembly(typeof(TestHost)).Location;
                builder.UseContentRoot(Path.GetDirectoryName(path));
                builder.ConfigureAppConfiguration(config => config.AddJsonFile("appsettings.json").AddEnvironmentVariables());
                
                builder.ConfigureServices(services =>
                {
                    services.AddControllers().AddApplicationPart(typeof(Program).Assembly);
                });

                builder.Configure(app =>
                {
                    app.UseRouting();

                    app.UseMiddleware<CustomExceptionMiddleware>();

                    app.UseHttpsRedirection();

                    app.UseAuthentication();

                    app.UseAuthorization();

                    app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
                });
            });

            return application.Server;
        }

        [OneTimeSetUp]
        public void GlobalSetup()
        {
            TestDatabase<DataContext>.SetUpDatabase();
        }

        [OneTimeTearDown]
        public void GlobalTeardown()
        {
            TestDatabase<DataContext>.TeardownDatabase();
        }
    }
}
