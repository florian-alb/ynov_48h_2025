document.addEventListener('DOMContentLoaded', (event) => {
    const socket = io()

    // Assume zoneId is available globally or fetched from somewhere
    const zoneId = 'your-zone-id'; // Replace with actual zoneId

    // Join the room for the specific zone
    socket.emit('join room', zoneId)

    // Send message
    document.getElementById('chat-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const input = document.getElementById('message')
        const message = {
            zoneId: zoneId,
            userName: input.userName, 
            text: input.value
        }
        socket.emit('chat message', message)
        input.value = ''
    })

    // Receive message
    socket.on('chat message', (msg) => {
        const item = document.createElement('li')
        item.textContent = `${msg.zoneId} - ${msg.userName}: ${msg.text}`
        document.getElementById('messages').appendChild(item)
    })
})