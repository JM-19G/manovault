import { useState } from 'react';
import Header from './components/common/Header';
import Home from './pages/Home';
import SavedItems from './pages/SavedItems';
import Footer from './components/common/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [activeTab, setActiveTab] = useState('cars');

  return (
    <div className="min-h-screen text-white">
      
      <Header setPage={setPage} activeTab={activeTab} setActiveTab={setActiveTab} />

      {page === 'home' && <Home activeTab={activeTab} setActiveTab={setActiveTab} />}
      {page === 'saved' && <SavedItems />}

      <Footer />
    </div>
  );
}

export default App;
