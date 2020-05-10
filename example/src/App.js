import React, { Component } from 'react'

import { ExampleComponent, Button } from 'seventh-component-library'

export default class App extends Component {
  render () {
    return (
      <div>
      	<Button>Clicky</Button>
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
