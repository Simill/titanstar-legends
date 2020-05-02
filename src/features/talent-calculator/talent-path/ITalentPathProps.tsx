import { ITalent } from '../../shared/interfaces/ITalent';

export interface ITalentPathProps {
  rootTalentID: string;
  onHandleTalentAdd: (talentID: string) => void;
  onHandleTalentRemove: (talentID: string) => void;
  title: string;
}
