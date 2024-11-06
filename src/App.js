// src/App.js
import React from 'react';
import './index.css'; // Ensure you import the CSS file
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/profile/Content';

function App() {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Content />
    </div>
  );
}

export default App;
