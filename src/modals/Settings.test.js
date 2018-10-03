import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Settings from './Settings'
configure({ adapter: new Adapter() })

//https://medium.com/@newyork.anthonyng/testing-react-components-state-b57bfc712b90

it("renders without errors", () => {
  const element = shallow(<Settings />)
  expect(element.length).toEqual(1)
})

