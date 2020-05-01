export interface ITalent {
  isActive: boolean;
  id: string;
  name: string;
  next: ITalent | null;
  prev: ITalent | null;
}
