import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('TDD로 개발하는 counter 앱 만들기', () => {
  test('the counter starts at 0', () => {
    render(<App />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('0');
  });

  test('minus button has correct text', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('minus-button');
    expect(buttonElement).toHaveTextContent('-');
  });

  test('plus button has correct text', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('plus-button');
    expect(buttonElement).toHaveTextContent('+');
  });

  test('When the - button is pressed, the counter changes to -1', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('minus-button');
    userEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('-1');
  });

  test('When the + button is pressed, the counter changes to 1', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('plus-button');
    userEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('1');
  });

  test('on/off button has blue color', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('on/off-button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
  });

  test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
    render(<App />);
    const onOffButtonElement = screen.getByTestId('on/off-button');
    userEvent.click(onOffButtonElement);
    const minusButtonElement = screen.getByTestId('minus-button');
    const plusButtonElement = screen.getByTestId('plus-button');
    expect(plusButtonElement).toBeDisabled();
    expect(minusButtonElement).toBeDisabled();
  });
});
