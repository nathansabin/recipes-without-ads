import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import FindRecipes from './components/find/findRecipes';

function App() {
  return (
    <div className="h-full w-100">
      <Header />
      <div className='flex flex-row my-4'>
        <Sidebar />
        <FindRecipes />
      </div>

    </div>
  );
}

export default App;
