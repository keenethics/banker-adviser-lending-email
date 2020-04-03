/* eslint-disable comma-dangle */
import { shallow, mount } from "enzyme";
import React from "react";
import GetListForm from "./get-list-form";
import Spinner from "../spinner/spinner";


jest.mock("axios");

describe("tets Get list form component", () => {
  it("show success message if value correct", async () => {
    const wrapper = mount(<GetListForm btnClass="blue" />);
    wrapper.find("input").simulate("change", { target: { value: "tabaka@stepan.com" } });
    expect(wrapper.find("input").prop("value")).toBe("tabaka@stepan.com");
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
