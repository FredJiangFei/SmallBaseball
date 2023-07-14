using SmallBase.Cache;
using System.Collections.Generic;
using System.Linq;

namespace SmallBaseball.Application
{
    public static class HubCache
    {
        public static IEnumerable<string> Get(this ICacheService cacheService, string userId)
        {
            if (cacheService.TryGetValue(userId, out IEnumerable<string> connectionIds))
            {
                return connectionIds;
            }

            return Enumerable.Empty<string>();
        }

        public static void Add(this ICacheService cacheService, string userId, string connectionId)
        {
            if (string.IsNullOrEmpty(userId) || string.IsNullOrEmpty(connectionId))
            {
                return;
            }

            if (!cacheService.TryGetValue(userId, out List<string> connectionIds) || !connectionIds.Exists(x => x == connectionId))
            {
                connectionIds ??= new List<string>();
                connectionIds.Add(connectionId);
                cacheService.Set(userId, connectionIds);
            }
        }

        public static void Remove(this ICacheService cacheService, string userId, string connectionId)
        {
            if (string.IsNullOrEmpty(userId) || string.IsNullOrEmpty(connectionId))
            {
                return;
            }

            if (cacheService.TryGetValue(userId, out List<string> connectionIds) && connectionIds.Exists(x => x == connectionId))
            {
                connectionIds.Remove(connectionId);
                cacheService.Set(userId, connectionIds);
            }
        }
    }
}
