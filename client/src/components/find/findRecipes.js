import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setRecipes } from '../../utils/redux/actions/recipeAction'
import axios from 'axios';

function FindRecipes() {
    const [ recipeName, setRecipeName ] = useState('');
    const dispatch = useDispatch();
    const data = useSelector((state) => state.recipe.recipes);


    const searchName = (event) => {
        let name = event.target.value;
        setRecipeName(name);
        console.log(recipeName);
    }

    const handleSubmit = (event) => {
        try {
            // axios.get();
            event.preventDefault();

            dispatch(setRecipes([
                {
                    name: 'sushi',
                    ingredients: ['rice', 'fish', 'seaweed'],
                    directions: "roll idk lol"
                },
                {
                    name: 'pb&j',
                    ingredients: ['bread', 'jelly', 'peanut butter'],
                    directions: "you already know"
                }
        ]));
        console.log("work?")
        console.log(data);
        }
        catch (err) {
            dispatch(setRecipes([
                null
            ]));
        }
    }


    return (
        <div className='mx-auto bg-amber-200 p-2 h-48 w-full bg-brown-400'>
            <form className=''>
                <div className='flex flex-col'>
                    <label className='text-4xl mx-auto py-1 text-red-300 font-light'>Enter a food:</label>
                    <hr className='my-3 h-0.5 w-60 shadow-lg bg-white mx-auto'/>
                    <input onChange={searchName} className='w-72 h-8 shadow-sm rounded mx-auto' type='text'></input>
                    <button onClick={handleSubmit} className='h-12 w-24 mt-4 mx-auto bg-red-300 text-white rounded-md hover:bg-red-600 hover:text-gray-50' type='submit'>
                        Search
                    </button>
                </div>
            </form>

        </div>
    );
}

export default FindRecipes;