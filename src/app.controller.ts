import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { Client, ClientKafka, KafkaContext, MessagePattern, Payload, Transport, Ctx } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'hero', // hero-client
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'hero-consumer' // hero-consumer-client
      }
    }
  })
  client: ClientKafka;
  
  async onModuleInit() {
    await this.client.connect();
  }

  @MessagePattern('hero.kill.dragon')
  async killDragon(
    @Payload() message: any,
    @Ctx() context: KafkaContext,
  ) {
    const originalMessage = context.getMessage();
    const partition = context.getPartition();
    const { headers, timestamp } = originalMessage;

    // Traitement du message ici
  }
}
