import React from 'react';
import { Button } from './components/atoms'

function App() {
  return (
    <Button label='Nova transação' onClick={() => console.log('Click')} />
  )
}

export default App;
