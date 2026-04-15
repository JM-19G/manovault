import { useState } from 'react';
import Header from './components/common/Header';
import Home from './pages/Home';
import SavedItems from './pages/SavedItems';
import Footer from './components/common/Footer';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen text-white">
      
      <Header setPage={setPage} />

      {page === 'home' && <Home />}
      {page === 'saved' && <SavedItems />}

      <Footer />
    </div>
  );
}

export default App;
