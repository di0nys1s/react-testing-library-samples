import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find the element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button color changed to blue when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("button text changed to Change to red when clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // click button
  fireEvent.click(colorButton);

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // check that the button starts out enabled
  expect(colorButton).toBeEnabled();

  // check that checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();
});

test("button enabled when checkbox is checked and disabled when checkbox is unchecked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton.textContent).toBe("Button is disabled");

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("button text is Buttomn is disabled when checkbox is checked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);
  expect(colorButton.textContent).toBe("Button is disabled");
});

test("Clicked button has gray background and reverts to blue", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  // click button and turn to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});
