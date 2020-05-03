import { shallow } from 'enzyme';
import React from 'react';
import TalentIcon from '../TalentIcon';

const component = shallow(
  <TalentIcon
    talentID={'talent'}
    onHandleTalentRemove={jest.fn()}
    onHandleTalentAdd={jest.fn()}
    isActive={false}
  />
);

describe('TalentIcon component', () => {
  it('displays an icon of its prop `talentID`', () => {
    const expected = 'happy-face';
    component.setProps({
      talentID: expected,
    });
    expect(component.find('div').prop('className')?.includes(expected)).toBe(
      true
    );
  });

  it('displays `is-active` class when is active', () => {
    let isActive = true;
    component.setProps({ isActive });
    expect(component.find('div').prop('className')?.includes('active')).toBe(
      isActive
    );

    isActive = false;

    component.setProps({ isActive });
    expect(component.find('div').prop('className')?.includes('active')).toBe(
      isActive
    );
  });

  it('calls the `onHandleTalentAdd` prop with the talentID prop on click', () => {
    const onHandleTalentAdd = jest.fn();
    const talentID = 'add-talent';
    component.setProps({
      onHandleTalentAdd,
      talentID,
    });
    component.simulate('click');
    expect(onHandleTalentAdd).toHaveBeenCalledWith(talentID);
  });

  it('calls the `onHandleTalentRemove` prop with the talentID prop on right click', () => {
    const onHandleTalentRemove = jest.fn();
    const talentID = 'remove-talent';
    component.setProps({
      onHandleTalentRemove,
      talentID,
    });
    component.simulate('contextmenu', {
      preventDefault: jest.fn(),
    });
    expect(onHandleTalentRemove).toHaveBeenCalledWith(talentID);
  });
});
