using Microsoft.AspNetCore.Identity;
using SmallBaseball.Application.Exceptions;
using SmallBaseball.Application.Identity;
using SmallBaseball.Application.Models;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;
using SmallBaseball.Infrastructure.Repository.EF;
using System.Security.Claims;

namespace SmallBaseball.Application.Commands
{
    public class LoginCommandHandler : ICommandHandler<LoginCommand, LoginResult>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IJwtTokenService _jwtTokenService;
        private readonly IRepository<Athlete> _athleteRepository;

        public LoginCommandHandler(UserManager<AppUser> userManager, IJwtTokenService jwtTokenService, IRepository<Athlete> athleteRepository)
        {
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
            _athleteRepository = athleteRepository;
        }

        public async Task<LoginResult> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user == null)
                throw new BusinessValidationException("No user");

            if (!await _userManager.CheckPasswordAsync(user, request.Password))
                throw new BusinessValidationException("Password invalid");

            var athlete = _athleteRepository.Get(Guid.Parse(user.Id));
            var claims = new[]
            {
                new Claim(ClaimTypes.Hash, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Sid, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim("FirstName", athlete.FirstName),
                new Claim("LastName", athlete.LastName)
            };

            return new LoginResult
            {
                Email = user.Email,
                Token = _jwtTokenService.GenerateToken(claims)
            };
        }
    }
}
