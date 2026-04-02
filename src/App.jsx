import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;