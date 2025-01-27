import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventsGateway } from './event/events.gateway';
import { RedisGateway } from './event/redis.gateway';
import  tonPere  from './tonPere'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hero-consumer'
          }
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    // AppService
    // EventsGateway, RedisGateway
  ],
})
export class AppModule {}
