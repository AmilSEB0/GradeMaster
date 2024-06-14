import { Module } from "@nestjs/common";
import { EleveService } from "./eleve.service";
import { EleveController } from "./eleve.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Eleve } from "./entities/eleve.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Eleve])],
  controllers: [EleveController],
  providers: [EleveService],
})
export class EleveModule {}
