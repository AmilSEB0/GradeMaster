export class CreateNoteDto {
  coef: number = 0;
  nom: string = "";
  eleves: { idEleve: number; note: number }[] = [];
}
