import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for extended matchers
import App from "./App";
import FileContainer from "./components/FileContainer";

// Mock the FileContainer component
jest.mock("./components/FileContainer", () => () => (
  <div>Mocked FileContainer</div>
));

describe("App Component", () => {
  test("renders FileContainer component", () => {
    render(<App />);

    // Check if the mocked FileContainer is rendered
    expect(screen.getByText(/Mocked FileContainer/i)).toBeInTheDocument();
  });

  // Additional test cases

  test("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test("does not render the real FileContainer", () => {
    const { queryByText } = render(<App />);
    // Ensure the real FileContainer is not in the document
    expect(queryByText(/Real FileContainer/i)).toBeNull();
  });
});
