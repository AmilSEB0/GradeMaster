import { Test, TestingModule } from "@nestjs/testing";
import { ProfesseurService } from "./professeur.service";

describe("ProfesseurService", () => {
  let service: ProfesseurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfesseurService],
    }).compile();

    service = module.get<ProfesseurService>(ProfesseurService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
