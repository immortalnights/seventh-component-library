import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from './Button';

test('renders button', () => {
	const { getByText } = render(<Button>Click Me</Button>);
	const buttonElement = getByText(/Click Me/);
	expect(buttonElement).toBeInTheDocument();
});

test('renders diabled button', () => {
	const { getByText } = render(<Button disabled={true}>Can't Click Me</Button>);
	const buttonElement = getByText(/Can't Click Me/);
	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement.disabled).toBe(true);
});

test('handles button click', () => {
	const handleClick = jest.fn();

	const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
	const buttonElement = getByText(/Click Me/);

	fireEvent.click(buttonElement);

	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement.disabled).toBe(false);
	expect(handleClick).toBeCalled();
});

test('does not handle button click', () => {
	const handleClick = jest.fn();

	const { getByText } = render(<Button disabled={true} onClick={handleClick}>Click Me</Button>);
	const buttonElement = getByText(/Click Me/);

	fireEvent.click(buttonElement);

	expect(buttonElement).toBeInTheDocument();
	expect(buttonElement.disabled).toBe(true);
	expect(handleClick).not.toBeCalled();
});