using Microsoft.AspNetCore.Http;
using Shouldly;
using SmallBaseball.Api.Models;
using SmallBaseball.Application.Commands;


namespace SmallBaseball.FunctionalTests.UserTests
{
    public class When_Call_Register : ScenarioBase
    {
        [Test]
        public async Task It_Should_ThrowException_When_RequiredFieldWereEmpty()
        {
            //Action
            var command = new RegisterCommand
            {
                FirstName = "",
                LastName = "",
                Email = "",
                Password = "",
                PasswordConfirmation = ""
            };

            var result = await PostAsync<ResponseResult>($"/api/users/register", command);

            //Assert
            this.ShouldSatisfyAllConditions(
                () => result.ShouldNotBeNull(),
                () => result.Code.ShouldBe(StatusCodes.Status400BadRequest),
                () => result.Errors.Count.ShouldBe(5)
            );
        }

        [Test]
        public async Task It_Should_Register_Unsuccessfully()
        {
            //Action
            var command = new RegisterCommand
            {
                FirstName = "Jaylee",
                LastName = "Li",
                Email = "jaylee11@test.com",
                Password = "aa@123456",
                PasswordConfirmation = "aa@123456"
            };

            var result = await PostAsync<ResponseResult>($"/api/users/register", command);

            //Assert
            this.ShouldSatisfyAllConditions(
                () => result.ShouldNotBeNull(),
                () => result.Code.ShouldBe(StatusCodes.Status200OK)
            );
        }
    }
}
