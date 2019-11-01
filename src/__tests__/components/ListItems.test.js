/* eslint global-require: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { ListItems } from '../../components';

describe('Components | ListItems', () => {
  it('renders without crashing', () => {
    const listItemsMock = [{
      id: 'people.1',
      image: 'image-link.jpeg',
      name: 'Luke Skywalker',
    }, {
      id: 'people.1',
      image: 'image-link.jpeg',
      name: 'Luke Skywalker',
    }];
    const wrapper = shallow(<ListItems
      listItems={listItemsMock}
      loadMoreIsVisible
      loadMoreHandler={() => { }}
      linkTo="/some-route"
      mdColumns={4}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
