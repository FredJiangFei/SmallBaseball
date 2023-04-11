using Elyte.Application.Exceptions;
using SmallBaseball.Api.Models;
using System.Text;
using System.Text.Json;

namespace SmallBaseball.Middlewares
{
    public class CustomExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (BusinessValidationException ex)
            {
                await HandleLogicCheckException(httpContext, ex);
            }
            catch (Exception ex)
            {
                await HandleGenericException(httpContext, ex);
            }
        }

        private async Task HandleLogicCheckException(HttpContext context, BusinessValidationException exception)
        {
            var result = new ResponseResult()
            {
                Code = StatusCodes.Status500InternalServerError,
                Message = exception.Message,
            };
            await WriteResult(context, result);
        }

        private async Task HandleGenericException(HttpContext context, Exception ex)
        {
            var result = new ResponseResult()
            {
                Code = StatusCodes.Status500InternalServerError,
                Message = "Oh Sorry! We seem to be having some issues. Please try again."
            };

            await WriteResult(context, result);
        }

        private async Task WriteResult(HttpContext context, ResponseResult result)
        {
            context.Response.StatusCode = result.Code;
            context.Response.ContentType = "application/json";

            var content = JsonSerializer.Serialize(result);
            await context.Response.WriteAsync(content, Encoding.UTF8);
        }
    }
}
