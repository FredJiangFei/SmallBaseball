using System;
using System.Threading;
using System.Threading.Tasks;

namespace SmallBaseball.Domain.Interfaces.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        Task<bool> CommitAsync(CancellationToken cancellationToken = default(CancellationToken));
    }
}
