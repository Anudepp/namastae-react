import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact"; // adjust path if needed

// we can write it or test 

it("renders contact form", () => {
  // render the Contact component
  render(<Contact />);

  // Query elements
  const heading = screen.getByRole("heading");
  const button = screen.getByRole("button", { name: /submit/i });

  // Assertions
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
