using Microsoft.Extensions.Caching.Memory;
using System;

namespace SmallBase.Cache
{
    public interface ICacheService
    {
        public TItem Set<TItem>(object key, TItem value);
        public bool TryGetValue<TItem>(object key, out TItem value);
        void Remove(object key);
    }
}
