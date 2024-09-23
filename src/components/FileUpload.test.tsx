import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FileUpload from "./FileUpload";

describe("FileUpload Component", () => {
  test("renders file upload inputs", () => {
    render(<FileUpload onSubmit={jest.fn()} />);

    // Expect file upload inputs to be present
    expect(screen.getByLabelText(/File 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/File 2/i)).toBeInTheDocument();
  });

  test("checks multiple elements with text", () => {
    render(<FileUpload onSubmit={jest.fn()} />);

    // Check for multiple elements with the text "Compare Files"
    const compareFilesButtons = screen.getAllByText(/Compare Files/i);
    expect(compareFilesButtons).toHaveLength(2); // Adjust length as needed
  });
});
