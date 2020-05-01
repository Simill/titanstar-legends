import { ITalent } from './ITalent';

/**
 * A class to represent a single talent in a talent path.
 * A double linked list may be formed for each talent so the full talent path can be traversed.
 */
export class Talent implements ITalent {
  public id: string = '';
  public name: string = '';
  public isActive: boolean = false;
  public prev: ITalent | null = null;
  public next: ITalent | null = null;

  public constructor(id: string) {
    this.id = id;
    this.name = id;
  }
}
