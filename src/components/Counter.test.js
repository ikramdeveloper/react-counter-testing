import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays right initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it('count increments by 1 when "increment" button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: /increment/i });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it('count decrements by 1 when "decrement" button is clicked', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={1} />);
    const decrementBtn = getByRole("button", { name: /decrement/i });
    fireEvent.click(decrementBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  it("count go back to zero", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={5} />);
    const restartBtn = getByRole("button", { name: /restart/i });
    fireEvent.click(restartBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  it("count changes its sign", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={-5} />);
    const switchSignBtn = getByRole("button", { name: /switch sign/i });
    fireEvent.click(switchSignBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(5);
  });
});
