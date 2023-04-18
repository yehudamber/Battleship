import http from "http";
import { server as WebsocketServer } from "websocket";

const httpServer = http.createServer();
httpServer.listen(9095, () => console.log("Listening on port 3001..."));

const wsServer = new WebsocketServer({ httpServer });
wsServer.on("request", (request) => {
    const connection = request.accept(undefined, request.origin);
    connection.on("close", () => console.log("Connection closed!"));
});