import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route) private routeRepo: Repository<Route>
  ) {}


  async create(createRouteDto: CreateRouteDto) {
    const resultTitle = await this.routeRepo.findOne({
      where: {
        title: createRouteDto.title,
      },
    });

    if(resultTitle){
      throw new BadRequestException(Route, `A rota com o titulo [${createRouteDto.title}] já existe!`);
    }

    const route = this.routeRepo.create(createRouteDto);
    return this.routeRepo.save(route);
  }

  findAll() {
    return this.routeRepo.find();
  }

  findOne(id: string) {
    return this.routeRepo.findOne(id);
  }

  async update(id: string, updateRouteDto: UpdateRouteDto) {
    const updateResult = await this.routeRepo.update(id, updateRouteDto);
    if (!updateResult.affected) {
      throw new EntityNotFoundError(Route, id);
    }
    return this.routeRepo.findOne(id);
  }

  async remove(id: string) {
    const deleteResult = await this.routeRepo.delete(id);
    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Route, id);
    }
  }
}
