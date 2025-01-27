import { Kafka } from 'kafkajs';


export default class tonPere {
  kafka: Kafka;
  producer: any;

  constructor(){}

  kafkaInit(){
    console.log("allo1")
    this.kafka = new Kafka({
      clientId: 'test-client',
      brokers: ['localhost:9092'],
    });
    console.log("allo2")
    this.producer = this.kafka.producer();
    console.log("allo3 ")
  }
    
  
  async sendMessage() {
    this.kafkaInit()
    await this.producer.connect();
    await this.producer.send({
      topic: 'test-topic',
      messages: [{ value: 'Hello KafkaJS' }],
    });
    await this.producer.disconnect();
  }
  
  
}