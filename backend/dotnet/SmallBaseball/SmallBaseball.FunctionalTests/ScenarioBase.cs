using Microsoft.AspNetCore.TestHost;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using NUnit.Framework.Internal;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.FunctionalTests
{
    public class ScenarioBase
    {
        protected TestServer Server => TestHost.Server;

        protected TestData<DataContext> Data { get; set; }

        protected ScenarioBase()
        {
            Data = new TestData<DataContext>(Server.Host.Services);
        }

        ~ScenarioBase()
        {
            Data?.Dispose();
            Data = null;
        }

        [SetUp]
        public void SetUp()
        {
          
        }

        protected async Task<TOut> SendAsync<TOut>(Func<HttpClient, Task<TOut>> func)
        {
            using (var client = Server.CreateClient())
            {
                var token = GetToken();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
                TestHost.TestContext = TestExecutionContext.CurrentContext;
                return await func.Invoke(client);
            }
        }

        protected async Task<T> RetrieveResult<T>(HttpResponseMessage message)
        {
            var content = await message.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(content);
        }

        protected async Task<TOut> PostAsync<TOut>(string uri, object param)
        {
            var response = await SendAsync(client =>
            {
                return client.PostAsync(uri, BuildContent(param));
            });
            var result = await RetrieveResult<TOut>(response);
            return result;
        }

        protected async Task<TOut> PutAsync<TOut>(string uri, object param)
        {
            var response = await SendAsync(client =>
            {
                return client.PutAsync(uri, BuildContent(param));
            });
            var result = await RetrieveResult<TOut>(response);
            return result;
        }

        protected async Task<TOut> GetAsync<TOut>(string uri)
        {
            var response = await SendAsync(client =>
            {
                return client.GetAsync(uri);
            });
            var result = await RetrieveResult<TOut>(response);
            return result;
        }
        protected StringContent BuildContent(object value)
        {
            var content = JsonConvert.SerializeObject(value);
            return new StringContent(content, Encoding.UTF8, "application/json");
        }

        private string GetToken()
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Sid, "1"),
                new Claim(ClaimTypes.Hash, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Role, UserRoles.Admin),
                new Claim(ClaimTypes.Email, "admin@sbb.com")
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("5B33FFD3-BE79-4549-9A64-7EBA439E68BC"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken("sbb.com",
                "sbb.com",
                claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: credentials,
                notBefore: DateTime.UtcNow);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
