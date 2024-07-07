type CacheEntry = {
    data: any;
    expiry: number;
  };
  
  const cache: { [key: string]: CacheEntry } = {};
  
  export const getCache = (key: string): any | undefined => {
    const entry = cache[key];
    if (entry && entry.expiry > Date.now()) {
      return entry.data;
    }
    return undefined;
  };
  
  export const setCache = (key: string, data: any, ttl: number): void => {
    cache[key] = {
      data,
      expiry: Date.now() + ttl,
    };
  };
  