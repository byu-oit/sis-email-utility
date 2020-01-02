import debug from 'debug'
import Timeout = NodeJS.Timeout
const logger = debug('email-utility-mailer:cache')

interface CacheData<T> {
  endTime: number | null
  timeoutId: Timeout | null
  ttl: number
  value: T | null
}

interface CacheObject<T> {
  clearCache: () => void
  getCache: () => T
  setCache: (value: any) => void
  getTTL: () => number
  setTTL: (ttl: number) => void
}

function clearCache<T> (data: CacheData<T>): void {
  logger('cache cleared')
  data.value = null
}

function ttlInMilliseconds<T> (data: CacheData<T>): number {
  return data.ttl * 60000
}

function refreshCache<T> (data: CacheData<T>): void {
  logger('cache updated')
  const ttl = ttlInMilliseconds<T>(data)
  if (data.timeoutId) clearTimeout(data.timeoutId)
  data.endTime = Date.now() + ttl
  data.timeoutId = setTimeout(() => clearCache<T>(data), ttl)
}

function shutdown<T> (data: CacheData<T>): void {
  if (data.timeoutId) clearTimeout(data.timeoutId)
}

function Cache<T> (): CacheObject<T> {
  const cache: { [key: string]: Function } = {}
  const data: CacheData<T> = {
    endTime: null,
    timeoutId: null,
    ttl: 10, // 10 minute default
    value: null
  }

  process.on('exit', () => shutdown(data)) // app is closing
  process.on('SIGINT', () => shutdown(data)) // catches ctrl+c event
  process.on('SIGBREAK', () => shutdown(data)) // catches Windows ctrl+c event
  process.on('SIGUSR1', () => shutdown(data)) // catches "kill pid"
  process.on('SIGUSR2', () => shutdown(data)) // catches "kill pid"

  cache.clearCache = function (): void {
    clearCache<T>(data)
    if (data.timeoutId) clearTimeout(data.timeoutId)
  }

  cache.getCache = function (): T | null {
    const value = data.value
    logger('cache retrieved')
    return value
  }

  cache.setCache = function (value: T): void {
    if (data.ttl > 0) {
      data.value = value
      refreshCache<T>(data)
      logger('cache stored')
    }
  }

  cache.getTTL = function (): number {
    return data.ttl
  }

  cache.setTTL = function (ttl: number): void {
    data.ttl = ttl > 0 ? ttl : 0
    if (data.endTime && Date.now() + ttlInMilliseconds<T>(data) < data.endTime) refreshCache<T>(data)
  }

  return cache as unknown as CacheObject<T>
}

export default Cache
