import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Inject, OnModuleInit } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    console.log('WebSocket server initialized:', !!this.server); // Vérifie si server est bien initialisé
  }

  async callMicroservice(data: any) {
    if (!this.server) {
      console.error('WebSocket server is not initialized!');
      return;
    }
    const result = this.server.emit('login', data);
    console.log('Emit login event with data:', data);
    return result;
  }
}
