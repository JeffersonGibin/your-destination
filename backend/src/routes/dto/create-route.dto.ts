import { Type } from 'class-transformer';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    IsObject,
    ValidateNested,
  } from 'class-validator';

class LocationDto {
    @IsNumber()
    @IsNotEmpty()
    latitude: number;

    @IsNumber()
    @IsNotEmpty()
    longitude: number;
}

export class CreateRouteDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @Type(() => LocationDto)
    @ValidateNested()
    @IsObject()
    @IsNotEmpty()
    startPosition: LocationDto;

    @Type(() => LocationDto)
    @ValidateNested()
    @IsObject()
    @IsNotEmpty()
    endPosition: LocationDto;
}
