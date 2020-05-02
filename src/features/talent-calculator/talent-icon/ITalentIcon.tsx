import { ITalent } from '../../shared/interfaces/ITalent';

export interface ITalentIconProps {
  talentID: string;
  isActive: boolean;
  onHandleTalentAdd: (talentID: string) => void;
  onHandleTalentRemove: (talentID: string) => void;
}
