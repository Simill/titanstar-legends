/**
 * A interface to represent a single talent in a talent path.
 * Any dependent or subsequent talents related to this one are refrenced to an talent object via their IDs, if any.
 */
export interface ITalent {
  isActive: boolean;
  id: string;
  name: string;
  next: string;
  prev: string;
}
