const expresss = require("express");
const app = expresss();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    methods: ["GET"],
  },
});

io.on("connection", (socket) => {
  let notification = {};
  let report = {};
  console.log("connection", socket.id);

  socket.on("notification", (e) => {
    notification = e;

    console.log("notification", e);

    socket.broadcast.emit("recieved_notification", notification);
  });

  socket.on("report", (e) => {
    report = e;
    console.log("report", e);
    socket.broadcast.emit("recieved_report", report);
    socket.emit("recieved_report", report);
  });
});

server.listen(3001, () => {
  console.log("server is running");
});
