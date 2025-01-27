import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io/adapters/io-adapter';
import { RedisIoAdapter } from './adaptater/redis-io.adaptater';
import { ClientKafka } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  

  // app.useWebSocketAdapter(new IoAdapter(app)); // basic

  // Uncomment these lines to use the Redis adapter:
  // const redisIoAdapter = new RedisIoAdapter(app);
  // await redisIoAdapter.connectToRedis();
  // app.useWebSocketAdapter(redisIoAdapter);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();