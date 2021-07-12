import { Exclude, Expose } from 'class-transformer';
import { Column } from 'typeorm';

export class LocationStartPosition {
  @Exclude()
  @Column({ name: 'start_position_latitude' })
  latitude: number;

  @Exclude()
  @Column({ name: 'start_position_longitude' })
  longitude: number;
}
