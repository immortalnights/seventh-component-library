import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Dialog from './Dialog';

test('renders dialog', () => {
	const { getByText } = render(<Dialog onClose={() => {}} />);
	const dialogHeaderElement = getByText(/Dialog/);
	expect(dialogHeaderElement).toBeInTheDocument();
});
