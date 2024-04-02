import './App.css';
import Header from './components/header/header';
import Home from './pages/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeEntry from './pages/recipeEntry/recipeEntry';

function App() {
  return (
    <div className="h-full w-100">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />} 
            />
          <Route 
            path="/recipe"
            element={<RecipeEntry />}  
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
