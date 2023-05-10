namespace SmallBaseball.Application.Exceptions
{
    public class ModelValidationException : Exception
    {
        public ModelValidationException(string message) : base(message) { }
        public List<KeyValuePair<string, string>> Errors { get; set; } = new List<KeyValuePair<string, string>>();
    }
}
