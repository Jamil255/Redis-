import express from 'express'
import client from './client.js'
const app = express()
const PORT = 3000

// datatype in redis
// String
// Hash
// List
// Set
// Sorted set
// Stream
// Bitmap
// Bitfield
// Geospatial

// ****************<!String>*****************

const stringDataType = async () => {
  // <**********get,set**********>
  //   const data = await client.set('user:1', 'jamil afzal')
  //   const data = await client.set('user:3', 'anees farooq')
  // const data = await client.get("user:1")
  // const data = await client.get("user:3")
  //   console.log(data)
  // <*********  mset,mget   *********>
  //   const data = await client.mset(
  //     ['product:1', 'ball'],
  //     ['product:2', 'bat'],
  //     ['product:3', 'tape'],
  //     ['product:4', 'wicket']
  //   )
  //   const data1 = await client.mset(['user:1', 'jamil afzal'])
  // const data= await client.mget(["product:1", "product:3"])
  // const data1=await client.mget(["user:1", "user:2","user:3"])
  // <******************expire**********>
  //     const data1=await client.expire("product:1",10)
  //   console.log(data1)
  // <***************incr,incrBy*************>
  //     const data2 = await client.set('product:1', 0)
  //     const incrData=await client.incr("product:1")
  //     const incrData=await client.incrby("product:1",100)
  //   console.log(incrData)
}

// stringDataType()

const listDataType = async () => {
  // <***********lpush,rpush***********>
  //   const data = await client.lpush('list1', 'rahul')
  //     data variable return the index of the list
  // const data = await client.rpush("list1","john deo")
  // <***********lpop,rpop,LLEN,lrange,ltrim***********>
  // llen return the length of the list
  // lpop&rpop return the delete value
  // const data=await client.lpop("list1")
  // const data=await client.rpop("list1")
  //   const data = await client.llen('list1')
  // const data1=await client.lpush("list2","abcc")
  // LMOVE <source> <destination> <sourceDirection> <destinationDirection>
  //   const data = await client.lmove('list2', 'list1', 'LEFT', 'LEFT')
  //   if (data) {
  //     console.log(`Moved element: ${data}`)
  //   } else {
  //     console.log('No element moved; source list may be empty.')
  //   }
  //   const data = await client.lrange("list1", 0 , -1)
  // lrange return the list
  //     const data = await client.ltrim("list1",0,-1)
    //   console.log(data)
    

    
    // <****************************blocking behavior********************>
    // const data = await client.blpop("list1", 10)
    // // list name and pop value even value is not exist then 10s wait 
    // console.log(data);
    
}

listDataType()

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
