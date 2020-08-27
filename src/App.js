import React from 'react';

import CounterContainer from './containers/CounterContainer';
import CounterContainer2 from './containers/CounterContainer2';

const App = () => {
  return (
      <div>
        <h1>Persisted Counter</h1>
        <CounterContainer />
        <CounterContainer2 />
      </div>
  );
};

export default App;