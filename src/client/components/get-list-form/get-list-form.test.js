/* eslint-disable comma-dangle */
import { shallow, mount } from "enzyme";
import React from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";
import GetListForm from "./get-list-form";


jest.mock("axios");
jest.useFakeTimers();

describe("tets Get list form component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should hide success message after 5 seconde", async () => {
    axios.post.mockImplementation(() => Promise.resolve());
    const wrapper = mount(<GetListForm btnClass="blue" />);
    wrapper.find("input").simulate("change", { target: { value: "email@email.com" } });
    expect(wrapper.find("input").prop("value")).toBe("email@email.com");
    wrapper.find("button").simulate("submit", { preventDefault() { } });

    await axios.post();
    jest.runAllTimers();
    wrapper.update();

    expect(wrapper.containsMatchingElement(
      <button type="submit">GET THE LIST</button>
    )).toBe(true);
  });
  it("should hide spinner after success fetch", async () => {
    axios.post.mockImplementation(() => Promise.resolve());
    const wrapper = mount(<GetListForm btnClass="blue" />);
    wrapper.find("input").simulate("change", { target: { value: "email@email.com" } });
    expect(wrapper.find("input").prop("value")).toBe("email@email.com");
    wrapper.find("button").simulate("submit", { preventDefault() { } });
    expect(wrapper.find(Spinner)).toHaveLength(1);

    await axios.post();
    wrapper.update();
    expect(axios.post).toHaveBeenCalledTimes(2);
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });

  it("should show success message after success fetch", async () => {
    axios.post.mockImplementation(() => Promise.resolve());
    const wrapper = mount(<GetListForm btnClass="blue" />);
    wrapper.find("input").simulate("change", { target: { value: "email@email.com" } });
    expect(wrapper.find("input").prop("value")).toBe("email@email.com");
    wrapper.find("button").simulate("submit", { preventDefault() { } });
    await axios.post();
    wrapper.update();
    expect(axios.post).toHaveBeenCalledTimes(2);
    expect(wrapper.find("button").containsMatchingElement(
      <img alt="success logo" />
    )).toBeTruthy();
    expect(wrapper.containsMatchingElement(
      <p className="input-message">
        Success! Check your email for access to 1000 investment bankers in NYC.
      </p>
    )).toBeTruthy();
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
