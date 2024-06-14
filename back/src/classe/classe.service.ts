import { Injectable } from "@nestjs/common";

@Injectable()
export class ClasseService {
  findAll() {
    return `This action returns all classe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classe`;
  }

  remove(id: number) {
    return `This action removes a #${id} classe`;
  }
}
