import React from "react";
import Score from "../components/Score";
import { mount, shallow } from "enzyme";

test("should render <Score/>", () => {
  const wrapper = shallow(<Score />);
  expect(wrapper);
});

test('should render p tag inside Score component with initial score', () => {
  const wrapper = shallow(<Score score={0}/>)
  expect(wrapper.find('p').text()).toBe('score:0');
  
})


