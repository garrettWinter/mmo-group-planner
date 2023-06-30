import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

function App() {

  const [currentPage, setCurrentPage] = useState('Page1') //UPDATE PAGE!!!!!

  const renderPage = () => {
    if (currentPage === 'Page1') {
      return <Page1 />;
    }
    if (currentPage === 'Page2') {
      return <Page2 />;
    }
    if (currentPage === 'Page3') {
      return <Page3 />;
    }
    if (currentPage === 'Page4') {
      return <Page4 />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
