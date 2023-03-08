using System;

namespace SmallBaseball.Application.Models
{
    public class LoginResult
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Gender { get; set; }
    }
}
