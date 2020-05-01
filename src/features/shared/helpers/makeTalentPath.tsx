import { ITalent } from '../classes/ITalent';
import { Talent } from '../classes/Talent';

/**
 * Creates a linked list from an array of talent IDs for a talent path.
 * @param treeIDs - An array of talent IDs.
 * @returns The first talent in the talent path or null if no IDs were passed in.
 */
export function makeTalentPath(treeIDs: string[]): ITalent {
  if (!treeIDs.length)
    throw new Error('No IDs were passed to make a talent list.');

  let rootTalent: ITalent | null = null;

  treeIDs.forEach((id, index) => {
    const talent = new Talent(id);

    if (index === 0) {
      rootTalent = talent;
    } else {
      let tempTalent = rootTalent;
      let prevTalent = null;

      while (tempTalent && tempTalent.next) {
        prevTalent = tempTalent;
        tempTalent = tempTalent.next;
      }

      if (tempTalent) {
        tempTalent.next = talent;
        tempTalent.prev = prevTalent;
        talent.prev = tempTalent;
      }
    }
  });

  if (rootTalent === null) throw new Error('Could not create Talent list.');

  return rootTalent;
}
