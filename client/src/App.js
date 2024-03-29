import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import FindRecipes from './components/find/findRecipes';
import Recipes from './components/recipes/recipes';

function App() {
  return (
    <div className="h-full w-100">
      <Header />
      <div className='flex flex-row my-4'>
        <Sidebar />
        <FindRecipes />
      </div>
      <Recipes />
    </div>
  );
}

export default App;
