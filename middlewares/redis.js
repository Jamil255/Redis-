import client from '../config/index.js'

const rateLimiter =
  ({ limit = 10, timer = 60, keys }) =>
  async (req, res, next) => {
    const clientIP = (
      req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      ''
    ).trim()
    const key = `${clientIP}:${keys}:request-count`

    const countRequest = await client.incr(key)

    if (countRequest === 1) {
      await client.expire(key, timer)
    }

    const ttl = await client.ttl(key)
    if (countRequest > limit) {
      return res.status(429).json({
        message: `Too many requests. Please try again after ${ttl} seconds.`,
      })
    }
    next()
  }

export default rateLimiter
