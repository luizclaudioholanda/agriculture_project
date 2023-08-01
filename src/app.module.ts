import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarmModule } from './farm/farm.module';
import { CityModule } from './city/city.module';
import { CropModule } from './crop/crop.module';
import { FarmerModule } from './farmer/farmer.module';
import { StateModule } from './state/state.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city/entities/city.entity';
import { State } from './state/entities/state.entity';
import { Farm } from './farm/entities/farm.entity';
import { Farmer } from './farmer/entities/farmer.entity';
import { Crop } from './crop/entities/crop.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "agriculture_server",
      port: 5432,
      username: "postgres",
      password: "agricultureChangeIt",
      database: "agriculture",
      entities: [City, State, Farm, Farmer, Crop],
      synchronize: true
    }),
    FarmModule, 
    StateModule, 
    CityModule, 
    CropModule, 
    FarmerModule, 
    StateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
