import { render, screen } from "@testing-library/react";
import FileUploadWrapper from "./FileUploadWrapper"; // Adjust the import according to your file structure

describe("FileUploadWrapper", () => {
  test("renders FileUpload component", () => {
    render(<FileUploadWrapper onSubmit={jest.fn()} />);
    screen.debug(); // Inspect rendered output

    // Check for the heading and button with text "Compare Files"
    const heading = screen.getByRole("heading", { name: /Compare Files/i });
    const button = screen.getByRole("button", { name: /Compare Files/i });

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
