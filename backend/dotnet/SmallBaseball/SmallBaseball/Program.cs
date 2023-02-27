using Autofac;
using Autofac.Extensions.DependencyInjection;
using MediatR;
using MediatR.Extensions.Autofac.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using SmallBaseball.Application.Behaviors;
using SmallBaseball.Application.Queries.User;
using SmallBaseball.Domain.Interfaces.Repository;
using SmallBaseball.Extensions;
using SmallBaseball.Infrastructure.Repository.EF;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(builder =>
{
    builder.RegisterMediatR(typeof(GetUsersQuery).Assembly);
    builder.RegisterGeneric(typeof(ValidationBehavior<,>)).As(typeof(IPipelineBehavior<,>)).InstancePerDependency();
});

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

builder.Services.AddIdentityServices();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.UseMigration();

app.Run();
