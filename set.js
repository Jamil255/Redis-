import express from 'express'
import client from './client.js'
const app = express()
const PORT = 3000

// ****************<List>*****************

const listDataType = async () => {
    // value is not exist return is 1 otherwise return 0
    const add = await client.sadd('isp', 4)
    // const delet = await client.srem('ip', 3)
    // const keyCheck=await client.sismember('ip',4)
    // const commonKey=await client.sinter("ip","tcp","isp")
//   console.log(commonKey)
}

// listDataType()

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
