import { shallow, mount } from "enzyme";
import React from "react";
import ReadMoreText from "./read-more-text";

describe("Read more text component", () => {
  it("text must be hidden ", () => {
    const mockText = "lorem impsun hello goodbye welcome easy breeezzzeeee lorem lorem impsun hello goodbye welcome easy breeezzzeeee lorem impsun hello goodbye welcome easy breeezzzeeee";
    const wrapper = shallow(<ReadMoreText text={mockText} />);
    expect(wrapper.containsAllMatchingElements([
      `${mockText.slice(0, 115)}...`,
      <small>Read more</small>,
    ])).toBeTruthy();
  });

  it("text must be visible", () => {
    const mockText = "lorem impsun hello goodbye welcome easy breeezzzeeee lorem impsun hello goodbye welcome easy breeezzzeeee";
    const wrapper = mount(<ReadMoreText text={mockText} />);
    wrapper.find("small").simulate("click");
    expect(wrapper.containsMatchingElement(
      mockText,
      <small> Hide</small>,
    )).toBeTruthy();
  });
});
