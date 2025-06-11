const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = new Server(server);



// Sockets

// here socket is client
io.on("connection", (socket) => {
    socket.on("user-mssg" ,(msg) =>{
        io.emit("message", msg)
    })
})








app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile("/public/index.html");
  });

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});