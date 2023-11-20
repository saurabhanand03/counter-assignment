// import necessary react testing library helpers here
import { render, screen, act } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

let container;

beforeEach(() => {
  // Render the Counter component here
  container = render(<Counter />).container;
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterHeader = screen.getByText(/Counter/i);
  expect(counterHeader).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByTestId('count');

  act(() => {
    incrementButton.click();
  });
  expect(countDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByTestId('count');

  act(() => {
    decrementButton.click();
  });
  expect(countDisplay).toHaveTextContent('-1');
});
