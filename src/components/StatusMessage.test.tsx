import { render, screen } from "@testing-library/react";
import StatusMessage from "./StatusMessage";

test("displays loading message", () => {
  render(<StatusMessage loading={true} result={null} error="" />);
  expect(
    screen.getByText(/Comparing files, please wait.../i)
  ).toBeInTheDocument();
});

test("displays result message", () => {
  render(
    <StatusMessage loading={false} result="Files are identical." error="" />
  );
  expect(screen.getByText(/Files are identical./i)).toBeInTheDocument();
});

test("displays error message", () => {
  render(
    <StatusMessage
      loading={false}
      result={null}
      error="Failed to compare files."
    />
  );
  expect(screen.getByText(/Failed to compare files./i)).toBeInTheDocument();
});
