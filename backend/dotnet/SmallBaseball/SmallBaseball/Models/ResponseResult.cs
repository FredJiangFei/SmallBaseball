using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace SmallBaseball.Api.Models
{
    public class ResponseResult
    {
        public int Code { get; set; }
        public string Message { get; set; }
        public List<ResponseError> Errors { get; set; }

        public static ResponseResult None()
        {
            return new ResponseResult();
        }

        public static ResponseResult Ok()
        {
            return new ResponseResult() { Code = StatusCodes.Status200OK };
        }

        public static ResponseResult<T> FromValue<T>(T value)
        {
            return new ResponseResult<T>(value) { Code = StatusCodes.Status200OK };
        }

        public ResponseResult WithCode(int code)
        {
            this.Code = code;
            return this;
        }

        public ResponseResult WithMessage(string message)
        {
            this.Message = message;
            return this;
        }
    }

    public class ResponseResult<T> : ResponseResult
    {
        public ResponseResult(T value)
        {
            Value = value;
        }
        public T Value { get; set; }
    }

    public class ResponseError
    { 
        public string Name { get; set; }
        public string Error { get; set; }
    }
}
