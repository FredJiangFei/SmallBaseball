using SmallBaseball.Api.Models;
using Shouldly;
using SmallBaseball.Application.Commands;
using SmallBaseball.Infrastructure.Repository.EF;
using SmallBaseball.Application.Models;

namespace SmallBaseball.FunctionalTests.Scenarios.TodoTests
{
    public class When_Call_UserTest : ScenarioBase
    {
        [Test]
        public async Task It_Should_Register()
        {
            //Action
            var command = new RegisterCommand
            {
                FirstName = "Fred",
                LastName = "Jiang",
                Email = "fred@qq.com",
                Password = "aa123456"
            };

            var result = await PostAsync<ResponseResult<LoginResult>>($"/api/users/register", command);

            //Assert
            var users = Data.Query<AppUser>();
            this.ShouldSatisfyAllConditions(
              () => users.Count().ShouldBe(2),
              () => result.Value.Email.ShouldBe("fred@qq.com")
            );
        }

        [Test]
        public async Task It_Should_Login()
        {
            //Action
            var command = new LoginCommand
            {
                Email = "Admin@sbb.com",
                Password = "sbb123456"
            };

            var result = await PostAsync<ResponseResult<LoginResult>>($"/api/users/login", command);

            //Assert
            this.ShouldSatisfyAllConditions(
              () => result.Value.Email.ShouldBe("Admin@sbb.com"),
              () => result.Value.Token.ShouldNotBeNull()
            );
        }
    }
}
