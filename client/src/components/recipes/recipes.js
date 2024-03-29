import React from 'react';
import { useSelector } from 'react-redux';

function Recipes() {
    const recipeState = useSelector((state) => state.recipe.recipes);
    console.log(recipeState);

    const dothing = (event) => {
        event.preventDefault();
        console.log(recipeState);
    }
    return (
        <nav className='my-2 h-auto w-full bg-gray-50 mx-auto pb-4'>
            <div className='flex flex-row h-auto w-5/6 mx-auto'>
                <ol className='justify-center flex flex-row flex-wrap'>
                {recipeState.length > 0 && recipeState.map((recipe, id) => (
                <a key={id} href={recipe.url}>
                    <li className='bg-amber-300 w-48 h-44 m-1 text-white text-lg rounded hover:bg-amber-600 hover:text-red-200'>
                        <h4 className='text-center pt-1'>{recipe.title}</h4>
                        <img className="mx-auto w-36 h-auto" src={recipe.image} alt={recipe.title} />
                    </li>
                </a>
            ))}
                </ol>
            </div>
        </nav>
    );
}

export default Recipes;