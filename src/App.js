import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Choose from './components/choose-block/Choose';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main/>
      <Choose/>
    </div>
  );
}

export default App;
