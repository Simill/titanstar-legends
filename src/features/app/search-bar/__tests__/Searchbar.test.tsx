import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from '../SearchBar';
import Button from '../../../shared/components/button/Button';

describe('SearchBar component', () => {
  it('updates its value when typing in the search bar', () => {
    const component = shallow(<SearchBar />);
    const expected = 'test-value';
    component.find('input[type="text"]').simulate('change', {
      target: {
        value: expected,
      },
    });
    expect(component.find('input[type="text"]').prop('value')).toBe(expected);
  });

  it('searches for the value and clears the search bar on search submission', () => {
    const component = shallow(<SearchBar />);
    component.find('input[type="text"]').simulate('change', {
      target: {
        value: 'search for this',
      },
    });

    component.find(Button).simulate('click');

    expect(component.find('input[type="text"]').prop('value')).toBe('');
  });
});
