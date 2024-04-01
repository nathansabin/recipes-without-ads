import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import FindRecipes from '../../components/find/findRecipes';
import Recipes from '../../components/recipes/recipes';

function Home() {
    return (
    <div>
        <div className='flex flex-row my-4'>
            <Sidebar />
            <FindRecipes />
      </div>
      <Recipes />
    </ div>
    );
}

export default Home;