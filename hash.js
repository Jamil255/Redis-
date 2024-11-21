// import express from 'express'
// import client from './client.js'
// const app = express()
// const PORT = 3000

// const hashData = async () => {
//   const res1 = await client.hset('student:1', {
//     name: 'jamil afzal',
//     gender: 'male',
//     age: 20,
//     eyeColor: 'black',
//   })
//   const res2 = await client.hset('bike:1', {
//     model: '12',
//     brand: 'honda',
//     number: '1234',
//     price: 123456,
//   })
//     const getRes1=await client.hmget('bike:1',["model", "brand", "number", "price"])
//     console.log(getRes1)
//     const getIncr=await client.hincrby("student:1","age",10)
// }
// hashData()

// app.listen(PORT, () => {
//   console.log(`listening on ${PORT}`)
// })
