using FluentValidation;
using Serilog;
using SmallBaseball.API.Extensions;
using SmallBaseball.API.Middlewares;
using SmallBaseball.Application.Commands;


var builder = WebApplication.CreateBuilder(args);
Log.Logger = new LoggerConfiguration().ReadFrom.Configuration(builder.Configuration).CreateLogger();
builder.Host.UseSerilog();

builder.Services.AddCorsEx();
builder.Services.AddMediatREx();
builder.Services.AddValidatorsFromAssembly(typeof(ICommand<>).Assembly);
builder.Services.AddDomainContext(builder.Configuration);
builder.Services.AddRepositories();
builder.Services.AddIdentityServices();
builder.Services.AddJwtBearerScheme(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseStaticFiles();
app.UseMiddleware<CustomExceptionMiddleware>();
app.UseCors();
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.UseMigration();
app.Run();

public partial class Program { }
