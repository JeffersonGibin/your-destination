import { Exclude, Expose } from 'class-transformer';
import { Column } from 'typeorm';

export class LocationEndPosition {
  @Exclude()
  @Column({ name: 'end_position_latitude' })
  latitude: number;

  @Exclude()
  @Column({ name: 'end_position_longitude' })
  longitude: number;
}
