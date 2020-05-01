import { makeTalentPath } from '../makeTalentPath';
import { ITalent } from '../../classes/ITalent';

describe('makeList helper function', () => {
  it('throws an error for an empty array', () => {
    expect(() => {
      makeTalentPath([]);
    }).toThrow(Error);
  });

  it('creates a double linked list of talents from a flat array of strings', () => {
    const ids = ['test', 'this', 'linked', 'list'];
    const result = makeTalentPath(ids);

    ids.forEach((id, index) => {
      let talentNode: ITalent = result;

      // Traverse the list to get the proper talent. This only needs to be done on all nodes after the first index node.
      for (let i = 1; i < index + 1; i += 1) {
        if (talentNode.next) talentNode = talentNode.next;
      }

      expect(talentNode).not.toBe(null);
      expect(talentNode.id).toBe(id);

      // Test that the previous and next talents are the correct one if they exists
      if (talentNode.next) expect(talentNode.next.id).toBe(ids[index + 1]);
      if (talentNode.prev) expect(talentNode.prev.id).toBe(ids[index - 1]);
    });
  });
});
