import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
  @Inject('HERO_SERVICE') private readonly billingClient: ClientKafka) {}


  async onModuleInit() {
    try {
      console.log('coucou')
      await this.billingClient.connect(); // Connexion au broker Kafka
      console.log('Kafka client successfully connected');
    } catch (error) {
      console.error('Kafka connection failed', error);
    }
  }

  createOrder({ userId, price }: any) {
    this.billingClient.emit(
      'order_created',
      '133'
    );
  }
}
