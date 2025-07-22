import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";

// Reusable render function with all necessary providers
const renderHeader = () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

describe("Header Component", () => {
  test("renders logo and all navigation links", () => {
    renderHeader();

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders the cart with 0 items", () => {
    renderHeader();

    expect(screen.getByText("Cart(0 Items)")).toBeInTheDocument();
  });

  test("renders login button initially", () => {
    renderHeader();

    const loginBtn = screen.getByRole("button", { name: "Log-in" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("changes button to logout when clicked", () => {
    renderHeader();

    const loginBtn = screen.getByRole("button", { name: "Log-in" });
    fireEvent.click(loginBtn);

    expect(screen.getByRole("button", { name: "Log-out" })).toBeInTheDocument();
  });

  test("displays online status icon", () => {
    renderHeader();

    // Either ✅ or ❌ should be present
    const statusText = screen.getByText(/Status:/);
    expect(statusText).toBeInTheDocument();
  });

  test("displays the username from context", () => {
    renderHeader();

    expect(screen.getByText("Test User")).toBeInTheDocument();
  });
});
