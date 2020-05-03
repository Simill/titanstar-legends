import { ITalent } from '../shared/interfaces/ITalent';
import { ITalentPathData } from '../shared/interfaces/ITalentPathData';

export interface ITalentCalculatorProps {
  talentsMap: { [id: string]: ITalent };
  talentPathData: ITalentPathData[];
  maxTalentPoints: number;
}
