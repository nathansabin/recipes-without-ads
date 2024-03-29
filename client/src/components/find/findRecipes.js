import React, { useState } from 'react';
import axios from 'axios';

function FindRecipes() {
    const [ recipes, setRecipes] = useState([]);

    const handleSubmit = () => {
        try {
            axios.get();
            
        }
        catch (err) {
            setRecipes(null);
        }
    }

    return (
        <div className='mx-auto bg-amber-200 p-2 h-48 w-full bg-brown-400'>
            <form className=''>
                <div className='flex flex-col'>
                    <label className='text-4xl mx-auto font-bold py-1 text-red-300 font-light'>Enter a food:</label>
                    <hr className='my-3 h-0.5 w-60 shadow-lg bg-white mx-auto'/>
                    <input className='w-72 h-8 shadow-sm rounded mx-auto' type='text'></input>
                    <button className='h-12 w-24 mt-4 mx-auto bg-red-300 text-white rounded-md hover:bg-red-600 hover:text-gray-50' type='submit'>Search</button>
                </div>
            </form>

        </div>
    );
}

export default FindRecipes;