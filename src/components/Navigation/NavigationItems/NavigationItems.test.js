import React from 'react';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
configure({ adapter: new Adapter() });
describe('<Navigation Items />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it('renders correctly enzyme', () => {
    const wrapper = shallow(<NavigationItems />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render two <NavigationItem/> if not authenticated', () => {
    // const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it('should render three <NavigationItem/> if  authenticated', () => {
    //const wrapper = shallow(<NavigationItems isAuthenticated />);
    //  wrapper = wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should contain Node', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
