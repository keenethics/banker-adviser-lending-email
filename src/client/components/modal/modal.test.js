import React from "react";
import { mount } from "enzyme";
import Modal from "react-modal";
import ModalComponent from "./modal";

describe("Modal component", () => {
  let mockProps = {};
  beforeAll(() => {
    mockProps = {
      isOpen: true,
      togglemodal: () => {
        mockProps.isOpen = false;
        console.log(mockProps.isOpen);
      },
    };
  });

  it("should be hidden if props isOpen = false", () => {
    const wrapper = mount(<ModalComponent isOpen={false} togglemodal={mockProps.togglemodal} />);
    expect(wrapper.find(Modal).find("header")).toHaveLength(0);
  });

  it("should be open if props isOpen = true", () => {
    const wrapper = mount(<ModalComponent isOpen togglemodal={mockProps.togglemodal} />);
    expect(wrapper.find(Modal).find("header")).toHaveLength(1);
  });

  it("should close modal if user click outer modal body ", () => {
    const wrapper = mount(<ModalComponent {...mockProps} />);
    expect(wrapper.find(Modal).find("header")).toHaveLength(1);

    wrapper.find(".ReactModal__Overlay.ReactModal__Overlay--after-open").simulate("click");
    expect(wrapper.find("img")).toHaveLength(1);
    wrapper.find("img").simulate("click");
    wrapper.update();
    expect(wrapper.find(Modal).find("header")).toHaveLength(0);
  });
});
