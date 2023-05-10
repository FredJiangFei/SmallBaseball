using Microsoft.AspNetCore.Identity;
using SmallBaseball.Application.Models;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Domain.Models.Aggregates.TodoAggregate;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Application.Commands
{
    public class RegisterCommandHandler : ICommandHandler<RegisterCommand, LoginResult>
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IRepository<Athlete> _athleteRepository;

        public RegisterCommandHandler(UserManager<AppUser> userManager, IRepository<Athlete> athleteRepository)
        {
            _userManager = userManager;
            _athleteRepository = athleteRepository;
        }

        public async Task<LoginResult> Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            var user = await _userManager.FindByEmailAsync(request.Email);
            if (user != null)
                throw new Exception("User exist");

            var athlete = Athlete.Create(request.FirstName, request.LastName);
            user = new AppUser
            {
                Id = athlete.Id.ToString(),
                AthleteId = athlete.Id,
                Email = request.Email,
                UserName = request.Email
            };

            await _athleteRepository.CreateAsync(athlete);
            await _userManager.CreateAsync(user, request.Password);

            return new LoginResult
            {
                Email = request.Email,
            };
        }
    }
}
