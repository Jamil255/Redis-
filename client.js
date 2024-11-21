import Redis from 'ioredis';
import dotenv from "dotenv"
dotenv.config()

const client = new Redis({
    host: process.env.HOST, 
    port:process.env.PORT,
    password:process.env.PASSWORD,      
});

client.on('connect', () => {
    console.log('Connected to Redis!');
});

client.on('error', (err) => {
    console.error('Redis Error:', err);
});

export default client;
