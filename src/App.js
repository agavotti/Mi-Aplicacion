import './App.css';
import React from 'react';
import Public from './Routes/Public';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <header className="App-header">
      <AuthProvider>
        <Public />
      </AuthProvider>
    </header>

  );
}

export default App;
