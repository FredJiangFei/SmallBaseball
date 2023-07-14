using Microsoft.Extensions.Caching.Memory;
using System;

namespace SmallBase.Cache
{
    public class MemoryCacheService : ICacheService
    {
        private readonly IMemoryCache _memoryCache;
        public MemoryCacheService(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public TItem Set<TItem>(object key, TItem value)
        {
            return _memoryCache.Set(key, value, new MemoryCacheEntryOptions { SlidingExpiration = TimeSpan.FromDays(1) });
        }

        public bool TryGetValue<TItem>(object key, out TItem value)
        {
            return _memoryCache.TryGetValue(key, out value);
        }

        public void Remove(object key)
        {
            _memoryCache.Remove(key);
        }
    }
}
