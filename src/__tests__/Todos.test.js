import { render, screen, waitFor } from "@testing-library/react";
import Todos from "../Todos";

describe("Todos", () => {
  it.skip("renders delectus aut autem", async () => {
    render(<Todos />);
    await waitFor(
      () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 2000)
        ),
      { timeout: 5000 }
    );
    const text = screen.getByText(/delectus aut autem/i);
    expect(text).toBeInTheDocument();
  });

  it("renders delectus aut autem mock data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ title: "delectus aut autem" }]),
      })
    );
    render(<Todos />);
    expect(await screen.findByText(/delectus aut autem/i)).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});
