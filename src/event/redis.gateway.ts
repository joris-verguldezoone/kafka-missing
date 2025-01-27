import { Injectable } from '@nestjs/common';
import { Client, ClientRedis, Transport } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class RedisGateway {
  @Client({
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  })
  client: ClientRedis;

  async callMicroservice(data: any) {
    console.log('Emitting data to microservice via Redis:', data);
    
    // Envoi un message 'login' au microservice
    this.client.send('login', data).subscribe({
      next: (result) => console.log('Microservice result:', result),
      error: (err) => console.error('Error sending message:', err),
    });
  }
}
