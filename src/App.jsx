import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;