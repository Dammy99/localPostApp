using Application.Implementations;
using Application.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Configuration
{
    public static class InfrastructureConfiguration
    {
        public static void AddDI(this IServiceCollection services)
        {
            services.AddScoped<IFileWorker, FileWorker>();
        }
    }
}
