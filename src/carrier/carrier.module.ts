import { Module } from '@nestjs/common';
import { CarrierService } from './carrier.service';
import { CarrierController } from './carrier.controller';
import { CarrierRepository } from './carrier.repository';
import { DatabaseModule } from 'src/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { carrierSchema } from './entities/carrier.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Carrier', schema: carrierSchema }]),
  ],
  controllers: [CarrierController],
  providers: [CarrierService, CarrierRepository],
  exports: [CarrierService],
})
export class CarrierModule {}
