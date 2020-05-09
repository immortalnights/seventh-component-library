import React from 'react'

import { ExampleComponent } from 'seventh-component-library'
import 'seventh-component-library/dist/index.css'

const App = () => {
	return (
		<React.StrictMode>
			<ExampleComponent text="Create React Library Example 😄" />
		</React.StrictMode>
	);
}

export default App
