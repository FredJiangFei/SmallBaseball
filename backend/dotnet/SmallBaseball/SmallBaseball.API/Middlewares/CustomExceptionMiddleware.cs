using SmallBaseball.API.Models;
using SmallBaseball.Application.Exceptions;
using SmallBaseball.Domain.Models.Exceptions;
using System.Text;
using System.Text.Json;

namespace SmallBaseball.API.Middlewares
{
    public class CustomExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<CustomExceptionMiddleware> _logger;

        public CustomExceptionMiddleware(RequestDelegate next, ILogger<CustomExceptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (ModelValidationException ex)
            {
                await HandleModelValidationException(httpContext, ex);
            }
            catch (DomainException ex)
            {
                await HandleDomainException(httpContext, ex);
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

        private async Task HandleModelValidationException(HttpContext context, ModelValidationException exception)
        {
            var result = new ResponseResult
            {
                Code = StatusCodes.Status400BadRequest,
                Message = exception.Message,
                Errors = exception.Errors.Select(x => new ResponseError
                {
                    Name = x.Key,
                    Error = x.Value

                }).ToList()
            };
            await WriteResult(context, result);
        }

        private async Task HandleLogicCheckException(HttpContext context, BusinessValidationException exception)
        {
            var result = new ResponseResult
            {
                Code = StatusCodes.Status500InternalServerError,
                Message = exception.Message,
            };
            await WriteResult(context, result);
        }

        private async Task HandleGenericException(HttpContext context, Exception ex)
        {
            _logger.LogError(ex, $"{context.Connection.RemoteIpAddress}:{context.Request.Path}");
            var result = new ResponseResult
            {
                Code = StatusCodes.Status500InternalServerError,
                Message = "Oh Sorry! We seem to be having some issues. Please try again."
            };

            await WriteResult(context, result);
        }

        private async Task HandleDomainException(HttpContext context, DomainException exception)
        {
            var result = new ResponseResult()
            {
                Code = StatusCodes.Status422UnprocessableEntity,
                Message = exception.Message
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
