import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import InteractiveRecipe from './components/InteractiveRecipe';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<InteractiveRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;