using System;

namespace SmallBaseball.Application.Exceptions
{
    public class BusinessValidationException : Exception
    {
        public BusinessValidationException(string message) : base(message) { }
    }
}
