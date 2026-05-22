const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the static HTML file
app.use(express.static('public'));

// When a browser connects, start streaming data
io.on('connection', (socket) => {
    console.log('Browser connected!');
    
    // Send data every 1 second
    const intervalId = setInterval(() => {
        const freeMem = os.freemem();
        const totalMem = os.totalmem();
        const memoryUsage = (((totalMem - freeMem) / totalMem) * 100).toFixed(1);
        const uptime = os.uptime().toFixed(0);

        // Emit the data reactively to the frontend
        socket.emit('metricsUpdate', { memoryUsage, uptime });
    }, 1000);

    socket.on('disconnect', () => {
        console.log('Browser disconnected');
        clearInterval(intervalId);
    });
});

// Bind to 0.0.0.0 so Docker port forwarding works seamlessly
const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});