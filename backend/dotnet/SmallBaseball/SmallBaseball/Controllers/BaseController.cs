using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace SmallBaseball.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class BaseController : ControllerBase
    {
        public Guid UserId
        {
            get
            {
                var userId = User.FindFirstValue(ClaimTypes.Sid);
                return Guid.Parse(userId);
            }
        }
    }
}
