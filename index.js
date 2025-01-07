import express, { json } from 'express'
import client from './config/index.js'
import { getData } from './config/db.js'
import rateLimiter from './middlewares/redis.js'
const app = express()

const PORT = 3030

app.get(
  '/',
  rateLimiter({ limit: 10, timer: 60, keys: 'product' }),
  async (req, res) => {
    const isExist = await client.get('product')
    if (!isExist) {
      const data = await getData()
      await client.setex('product', 60, JSON.stringify(data))

      return res.json({
        data,
      })
    }

    return res.json({
      data: JSON.parse(isExist),
    })
  }
)
app.get(
  '/api',
  rateLimiter({ limit: 10, timer: 60, keys: 'home' }),
  async (req, res) => {
    res.send('hello world!')
  }
)

app.listen(PORT, () => console.log('listening on port' + PORT))
