import { render, screen } from "@testing-library/react";
import FileContainer from "./FileContainer";

describe("FileContainer", () => {
  test("renders FileUploadWrapper component", () => {
    render(<FileContainer />);

    // Check if the "Compare Files" text appears in multiple elements
    const compareFilesTexts = screen.queryAllByText(/Compare Files/i);
    expect(compareFilesTexts.length).toBeGreaterThan(0); // or specify the expected number
  });
});
