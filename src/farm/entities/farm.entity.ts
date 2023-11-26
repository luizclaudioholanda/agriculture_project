import { Validate } from 'class-validator';
import { Crop } from '../../crop/entities/crop.entity';
import { Farmer } from '../../farmer/entities/farmer.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FarmTotalAreaValidationRule } from '../validator/farm-total-area-validator';
import { State } from '../../state/entities/state.entity';

@Entity('Farm')
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', length: 60, nullable: false })
  name: string;

  @Column({
    name: 'areable_area',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  areable_area: number;

  @Column({
    name: 'vegetation_area',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  vegetation_area: number;

  @Column({
    name: 'total_area',
    type: 'numeric',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  @Validate(FarmTotalAreaValidationRule)
  total_area: number;

  @ManyToOne(() => State, (state) => state.farm)
  state: State;

  @ManyToOne(() => Farmer, (farmer) => farmer.farm)
  farmer: Farmer;

  @OneToMany(() => Crop, (crop) => crop.farm, { eager: true })
  crop: Crop[];
}
