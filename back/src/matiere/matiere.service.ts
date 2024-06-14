import { Injectable } from "@nestjs/common";

@Injectable()
export class MatiereService {
  findAll() {
    return `This action returns all matiere`;
  }

  findOne(id: number) {
    return `This action returns a #${id} matiere`;
  }

  remove(id: number) {
    return `This action removes a #${id} matiere`;
  }
}
