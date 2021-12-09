import React from 'react';
import './app.css';

function App() {
  const name = 'seoin';
  return (
    <React.Fragment>
      <h1 className='title' onClick="">hello {name} ! </h1>
      <h1>Bye!</h1>
      {['😀','🌲'].map(item =>(
          <h1>{item}</h1>))}
    </React.Fragment>
    )
}

export default App;
