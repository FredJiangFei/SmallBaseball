using Microsoft.Extensions.DependencyInjection;
using SmallBaseball.Application.Identity;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;
using SmallBaseball.Infrastructure.Repository.EF;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Security.Claims;

namespace SmallBaseball.FunctionalTests
{
    public class ScenarioBase
    {
        protected Athlete Athlete { get; set; }
        protected TestDatabase<DataContext> Database { get; set; }

        protected ScenarioBase()
        {
            using (var scope = TestHost.Server.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                Database = new TestDatabase<DataContext>(services);
            }
        }

        [SetUp]
        public void SetUp()
        {
            Athlete = new Athlete
            {
                FirstName = "Fred",
                LastName = "Jiang"
            };
        }

        private async Task<TOut> SendAsync<TOut>(Func<HttpClient, Task<TOut>> func)
        {
            using (var client = TestHost.Server.CreateClient())
            {
                var token = GenerateToken();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                return await func.Invoke(client);
            }
        }

        protected async Task<TReponse> GetAsync<TReponse>(string uri)
        {
            var response = await this.SendAsync(client => client.GetFromJsonAsync<TReponse>(uri));
            return response;
        }

        protected async Task<TReponse> PostAsync<TReponse>(string uri, object param)
        {
            var response = await this.SendAsync(client => client.PostAsJsonAsync(uri, param));
            var result = await response.Content.ReadFromJsonAsync<TReponse>();
            return result;
        }

        protected async Task<TReponse> PutAsync<TReponse>(string uri, object param)
        {
            var response = await this.SendAsync(client => client.PutAsJsonAsync(uri, param));
            var result = await response.Content.ReadFromJsonAsync<TReponse>();
            return result;
        }

        protected async Task<TReponse> DeleteAsync<TReponse>(string uri)
        {
            var response = await this.SendAsync(client => client.DeleteAsync(uri));
            var result = await response.Content.ReadFromJsonAsync<TReponse>();
            return result;
        }

        private string GenerateToken()
        {
            using (var scope = TestHost.Server.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var tokenService = services.GetRequiredService<IJwtTokenService>();

                var claims = new[]
                {
                    new Claim(ClaimTypes.Hash, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.Sid, Athlete.Id.ToString())
                };
                return tokenService.GenerateToken(claims);
            }
        }
    }
}
