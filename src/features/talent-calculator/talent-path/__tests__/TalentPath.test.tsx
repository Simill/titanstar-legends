import { shallow } from 'enzyme';
import React from 'react';
import TalentPath from '../TalentPath';
import TalentIcon from '../../talent-icon/TalentIcon';
import { ITalent } from '../../../shared/interfaces/ITalent';

const mockTalents: { [id: string]: ITalent } = {
  unitTest: {
    id: 'unitTest',
    name: 'unitTest',
    prev: '',
    next: 'acceptanceTest',
    isActive: false,
  },
  acceptanceTest: {
    id: 'acceptanceTest',
    name: 'acceptanceTest',
    prev: 'unitTest',
    next: 'e2eTest',
    isActive: false,
  },
  e2eTest: {
    id: 'e2eTest',
    name: 'e2eTest',
    prev: 'acceptanceTest',
    next: '',
    isActive: false,
  },
};

const component = shallow(
  <TalentPath
    title="Test TalentPath Component"
    rootTalentID="unitTest"
    onHandleTalentRemove={jest.fn()}
    onHandleTalentAdd={jest.fn()}
    talentsMap={mockTalents}
  />
);

describe('TalentPath component', () => {
  it('displays the `title` prop', () => {
    const expected = 'talents go here';
    component.setProps({
      title: expected,
    });
    expect(component.find('.talent-path__title').text()).toBe(expected);
  });

  it('renders expected talent path', () => {
    component.setProps({
      rootTalentID: 'unitTest',
    });
    expect(component.find(TalentIcon).length).toBe(3);
    expect(component.find('.talent-path__path').length).toBe(2);
  });

  it('renders expected talent path with active talents', () => {
    const talentsMap = Object.assign({}, mockTalents);
    talentsMap.unitTest.isActive = true;

    component.setProps({ talentsMap });

    expect(component.find('.talent-path__path--active').length).toBe(1);
  });
});
