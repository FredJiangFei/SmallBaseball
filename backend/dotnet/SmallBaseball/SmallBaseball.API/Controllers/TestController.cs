using Microsoft.AspNetCore.Mvc;
using SmallBaseball.API.Models;
using Microsoft.AspNetCore.Authorization;

namespace SmallBaseball.Controllers
{
    public class TestController : BaseController
    {
        [HttpGet]
        [AllowAnonymous]
        public ResponseResult Get()
        {
            return ResponseResult.FromValue("Hi");
        }
    }
}