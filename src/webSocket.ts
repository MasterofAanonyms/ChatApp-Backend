import { Server } from "http";
import { WebSocketServer } from "ws"; 

export function startWebSocket(server: Server){

    const userConnections = new Map();

    const wsServer = new WebSocketServer({ server });

    wsServer.on("connection", (ws)=>{

        console.log("Connected to websocket");

        ws.on("message", (data)=>{

            const msgData = JSON.parse(data.toString());

            if(msgData.type === "register"){

                //save to map

                userConnections.set( msgData.data, ws );
                console.log("Connection saved!");

            }else if(msgData.type === "chat"){
                //send to reciver
                console.log(msgData.data);
            }

        });

    });

}