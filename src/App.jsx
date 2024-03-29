// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
// App.jsx
import React from 'react';
// import Image from './components/Profilepic'; // Adjust the path accordingly


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        
      </main>
      <footer class="site-footer">
          <div class="footer-container">
            <p>Created By Bethany Colon</p>
          </div>
      </footer>
    </>
  );
}

export default App;

