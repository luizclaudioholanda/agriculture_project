import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { FarmerController } from './farmer.controller';
import { Farmer } from './entities/farmer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Farmer])],
  controllers: [FarmerController],
  providers: [FarmerService]
})
export class FarmerModule {}
