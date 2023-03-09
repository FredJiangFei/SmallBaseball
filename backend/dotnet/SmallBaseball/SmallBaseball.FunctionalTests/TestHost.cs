using SmallBaseball.FunctionalTests;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using NUnit.Framework.Internal;
using System.Reflection;

namespace SmallBaseball.FunctionalTests
{
    public static class TestHost
    {
        public static TestServer Server = CreateServer();
        public static TestExecutionContext TestContext { get; set; }
        private static TestServer CreateServer()
        {
            var path = Assembly.GetAssembly(typeof(TestHost)).Location;
            var hostBuilder = new WebHostBuilder()
                .UseContentRoot(Path.GetDirectoryName(path))
                .ConfigureAppConfiguration((a, b) =>
                {
                    b.AddJsonFile($"appsettings.json");
                })
                .UseStartup<TestStartup>();
            var testServer = new TestServer(hostBuilder);
            return testServer;
        }
    }
}
