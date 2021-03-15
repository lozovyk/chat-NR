import React from 'react';
import io from 'socket.io-client';

function App() {
  const connectSocket = () => {
    io('http://localhost:5555');
  };

  return (
    <div className="App">
      <h1>Hello chat!</h1>
      <button onClick={connectSocket}>Connect</button>
    </div>
  );
}

export default App;
