import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Counter from "../Counter";

describe("Counter", () => {
  it("renders title", async () => {
    render(<Counter />);
    const title = screen.getByText(/0/i);
    expect(title).toBeInTheDocument();
  });

  it("increments counter", async () => {
    render(<Counter />);
    const button = screen.getByText(/increment/i);
    act(() => button.click());
    const title = screen.getByText(/1/i);
    expect(title).toBeInTheDocument();
  });
});
