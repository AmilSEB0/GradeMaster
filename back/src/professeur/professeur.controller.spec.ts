import { Test, TestingModule } from "@nestjs/testing";
import { ProfesseurController } from "./professeur.controller";
import { ProfesseurService } from "./professeur.service";

describe("ProfesseurController", () => {
  let controller: ProfesseurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesseurController],
      providers: [ProfesseurService],
    }).compile();

    controller = module.get<ProfesseurController>(ProfesseurController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
