import React from "react";
import renderer from "react-test-renderer";

import { MainPage, BlogItemCard } from "./index.jsx";

describe("MainPage component", () => {
  it("snapshot renders", () => {
    const component = renderer.create(<MainPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
