using System;

namespace SmallBaseball.Application.Identity
{
    public class JwtSettings
    {
        public string Key { get; set; }
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public TimeSpan Expiration { get; set; }
    }
}
