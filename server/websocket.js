const WebSocket = require("ws");
const http = require("http");
const setupWSConnection = require("y-websocket/bin/utils").setupConnection;

const port = 1234;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Macondo Sync Server v1.0");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (conn, req) => {
  console.log("User connected to room:", req.url);
  setupWSConnection(conn, req, { gc: true });
});

server.listem(port, () => {
  console.log(
    "🚀 Macondo WebSocket Cluster running on http://localhost:${port}",
  );
});
