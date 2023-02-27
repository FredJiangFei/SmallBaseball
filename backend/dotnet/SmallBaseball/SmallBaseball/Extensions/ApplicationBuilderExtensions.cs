using Microsoft.EntityFrameworkCore;
using SmallBaseball.Infrastructure.Repository.EF;

namespace SmallBaseball.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseMigration(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<DataContext>();
                context.Database.Migrate();
                
            }
            return app;
        }
    }
}
