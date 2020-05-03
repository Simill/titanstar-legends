import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { ITalent } from '../../shared/interfaces/ITalent';
import TalentCalculator from '../TalentCalculator';
import TalentPath from '../talent-path/TalentPath';
import { ITalentPathData } from '../../shared/interfaces/ITalentPathData';
import { ITalentCalculatorProps } from '../ITalentCalculatorProps';

const mockTalents: { [id: string]: ITalent } = {
  unitTest: {
    id: 'unitTest',
    name: 'unitTest',
    prev: '',
    next: 'integrationTest',
    isActive: false,
  },
  integrationTest: {
    id: 'integrationTest',
    name: 'integrationTest',
    prev: 'unitTest',
    next: 'e2eTest',
    isActive: false,
  },
  e2eTest: {
    id: 'e2eTest',
    name: 'e2eTest',
    prev: 'integrationTest',
    next: 'acceptanceTest',
    isActive: false,
  },
  acceptanceTest: {
    id: 'acceptanceTest',
    name: 'acceptanceTest',
    prev: 'e2eTest',
    next: 'performanceTest',
    isActive: false,
  },
  performanceTest: {
    id: 'performanceTest',
    name: 'performanceTest',
    prev: 'acceptanceTest',
    next: 'smokeTest',
    isActive: false,
  },
  smokeTest: {
    id: 'smokeTest',
    name: 'smokeTest',
    prev: 'performanceTest',
    next: 'release',
    isActive: false,
  },
  release: {
    id: 'release',
    name: 'release',
    prev: 'smokeTest',
    next: '',
    isActive: false,
  },
};

const mockTalentPathData: ITalentPathData[] = [
  {
    rootTalentID: 'unitTest',
    title: 'Testing Path',
  },
];

const component = shallow(
  <TalentCalculator
    talentsMap={mockTalents}
    talentPathData={mockTalentPathData}
    maxTalentPoints={6}
  />
);

describe('TalentCalculator component', () => {
  describe('handles adding talents', () => {
    it('talent may be added if the previous talent is active or if there is no previous talent', () => {
      const talentsMap = cloneTalents(mockTalents);
      component.setProps({ talentsMap });
      setTalentActive('unitTest');
      expect(talentsMap.unitTest.isActive).toBe(true);
      expect(talentsMap.integrationTest.isActive).toBe(false);

      setTalentActive('integrationTest');
      expect(talentsMap.integrationTest.isActive).toBe(true);
    });

    it('talent may be not added if the previous talent is not active', () => {
      const talentsMap = cloneTalents(mockTalents);
      component.setProps({ talentsMap });
      setTalentActive('acceptanceTest');
      setTalentActive('e2eTest');

      expect(talentsMap.acceptanceTest.isActive).toBe(false);
      expect(talentsMap.e2eTest.isActive).toBe(false);
    });

    it('will only allow talents points to be active based on the `maxTalentPoints` prop', () => {
      const talentsMap = cloneTalents(mockTalents);
      const maxTalentPoints = 2;
      const testComponent = shallow(
        <TalentCalculator
          maxTalentPoints={maxTalentPoints}
          talentsMap={talentsMap}
          talentPathData={mockTalentPathData}
        />
      );
      setTalentActive('unitTest', testComponent);
      setTalentActive('integrationTest', testComponent);
      setTalentActive('e2eTest', testComponent);

      expect(talentsMap.unitTest.isActive).toBe(true);
      expect(talentsMap.integrationTest.isActive).toBe(true);
      expect(talentsMap.e2eTest.isActive).toBe(false);
    });
  });

  describe('handles removing talents', () => {
    it('allows removing a talent', () => {
      const talentsMap = cloneTalents(mockTalents);
      talentsMap.unitTest.isActive = true;
      component.setProps({ talentsMap });
      setTalentInactive('unitTest');
      expect(talentsMap.unitTest.isActive).toBe(false);
    });
    it('removes a talent and all of its subsequent talents if they are active', () => {
      const talentsMap = cloneTalents(mockTalents);
      talentsMap.unitTest.isActive = true;
      talentsMap.integrationTest.isActive = true;
      talentsMap.e2eTest.isActive = true;
      component.setProps({ talentsMap });

      setTalentInactive('unitTest');

      expect(talentsMap.unitTest.isActive).toBe(false);
      expect(talentsMap.integrationTest.isActive).toBe(false);
      expect(talentsMap.e2eTest.isActive).toBe(false);
    });
  });

  it('tracks the points spent on upgrades', () => {
    const talentsMap = cloneTalents(mockTalents);
    const testComponent = shallow(
      <TalentCalculator
        talentsMap={talentsMap}
        talentPathData={mockTalentPathData}
        maxTalentPoints={6}
      />
    );

    expect(
      testComponent.find('.talent-calculator__point-text').text().includes('0')
    ).toBe(true);
    setTalentActive('unitTest', testComponent);
    expect(
      testComponent.find('.talent-calculator__point-text').text().includes('1')
    ).toBe(true);
  });
});

/**
 * Clones the talents map object.
 * Normally a more robust way of deep cloning the object would be used, a la using a third party library, but this works for now.
 * @param talentsMap - The map to clone
 * @returns the cloned talent map.
 */
function cloneTalents(talentsMap: { [id: string]: ITalent }) {
  return JSON.parse(JSON.stringify(talentsMap));
}

/**
 * Sets the given talent to active via invoking the TalentCalculator's `handleAddTalent` method.
 * @param talentID - The talent ID to set.
 */
function setTalentActive(
  talentID: string,
  componentToSet?: ShallowWrapper<any>
) {
  const componentToUse = componentToSet || component;
  componentToUse.find(TalentPath).prop('onHandleTalentAdd')(talentID);
}

/**
 * Sets the given talent to active via invoking the TalentCalculator's `handleAddTalent` method.
 * @param talentID - The talent ID to set.
 */
function setTalentInactive(
  talentID: string,
  componentToSet?: ShallowWrapper<any>
) {
  const componentToUse = componentToSet || component;
  componentToUse.find(TalentPath).prop('onHandleTalentRemove')(talentID);
}
