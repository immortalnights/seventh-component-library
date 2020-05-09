import React from 'react';
import { render } from '@testing-library/react';
import Dialog from './Dialog';

test('renders dialog', () => {
	const { getByText } = render(<Dialog />);
	const dialogHeaderElement = getByText(/Dialog/);
	expect(dialogHeaderElement).toBeInTheDocument();
});