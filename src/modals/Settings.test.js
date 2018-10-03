import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Settings from './Settings'
configure({ adapter: new Adapter() })

//https://medium.com/@newyork.anthonyng/testing-react-components-state-b57bfc712b90

it('opens the settings modal', () => {
  const settings = shallow(<Settings />)
  const openButton = settings.find('Button').at(0);
  openButton.simulate('Click')

  // let settigns_inst = settings.instance()
  // expect(settigns_inst.state.open).toEqual(false)
  // settings.simulate('click')
})

