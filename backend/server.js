import app from './app.js'
import prisma from './db.js'
import { createServer } from 'http'
import { Server } from 'socket.io'

const server = createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('a user connected')

    // Join a room based on zoneId
    socket.on('join room', (zoneId) => {
        socket.join(zoneId)
        console.log(`User joined room: ${zoneId}`)
    })

    // Listen for chat messages
    socket.on('chat message', async (msg) => {
        console.log(`message from zone ${msg.zoneId} from ${msg.userName}: ${msg.text}`)
        
        // Save message to database
        await prisma.chat.create({
            data: {
                zoneId: msg.zoneId,
                userName: msg.userName,
                message: msg.text,
                createdAt: new Date()
            }
        })

        // Broadcast the message to the specific room
        io.to(msg.zoneId).emit('chat message', msg)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

prisma.$connect().then(async () => {  
    console.log('Connected to the database')
    
    app.listen('3000', () => {
        console.log('Server running on port 3000')
    })
}).catch((error) => {  
    console.error(error)
})