/* eslint-disable comma-dangle */
import { shallow, mount } from "enzyme";
import React from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";
import GetListForm from "./get-list-form";


jest.mock("axios");

describe("tets Get list form component", () => {
  it("should hide spinner after success fetch", () => {
    const wrapper = mount(<GetListForm btnClass="blue" />);
    const promise = Promise.resolve("hi");
    axios.post = jest.fn(() => promise);
    wrapper.find("input").simulate("change", { target: { value: "email@email.com" } });
    expect(wrapper.find("input").prop("value")).toBe("email@email.com");
    wrapper.find("button").simulate("submit", { preventDefault() { } });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it("change input value", () => {
    const wrapper = mount(<GetListForm white btnClass="blue" />);
    wrapper.find("input").simulate("change", { target: { value: "stepan" } });
    expect(wrapper.find("input").prop("value")).toBe("stepan");
  });

  it("show error message if value incorrect", () => {
    const wrapper = shallow(<GetListForm white btnClass="blue" />);
    wrapper.find("input").simulate("change", { target: { value: "stepanstepan.com" } });
    expect(wrapper.find("input").prop("value")).toBe("stepanstepan.com");
    wrapper.find("form").simulate("submit", { preventDefault() { } });
    expect(wrapper.contains(
      <p className="input-message" style={{ color: "#F43636" }}>
        Please enter a valid email (e.g. johnsmith@gmail.com )
      </p>,
    )).toEqual(true);
  });
});
