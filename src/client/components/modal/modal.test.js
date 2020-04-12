import React, { useState } from "react";
import { mount } from "enzyme";
import Modal from "react-modal";
import ModalComponent from "./modal";


const MountModal = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <ModalComponent isOpen={isOpen} togglemodal={setIsOpen} />
  );
};

describe("Modal component", () => {
  it("should be hidden if props isOpen = false", () => {
    const wrapper = mount(<MountModal open={false} />);
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("should be open if props isOpen = true", () => {
    const wrapper = mount(<MountModal open />);
    expect(wrapper.find("header")).toHaveLength(1);
  });

  it("should close modal if user click on hide icon", () => {
    const wrapper = mount(<MountModal open />);
    expect(wrapper.find(Modal).find("header")).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
    wrapper.find("img").simulate("click");
    expect(wrapper.find(Modal).find("header")).toHaveLength(0);
  });
});
