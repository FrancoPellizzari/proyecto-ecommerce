import React, { useState } from 'react';

import data from './fakeapi/data.json';
import Header from './components/Header/Header';
import ProductSection from './components/ProducSection/ProductSection';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/footer/Footer';



function App() {
  const [filterText, setFilterText] = useState('');

  return (
   
    <ThemeProvider>
      <div>
       <Header filterText={filterText} onFilterTextChange={setFilterText} />

        <ProductSection products={data} filterText={filterText} />
        <Footer />
      </div>

    </ThemeProvider>
    
  );
}

export default App;
