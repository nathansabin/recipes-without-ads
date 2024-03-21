import React, { useState } from 'react';

function FindRecipes() {
    const [ recipes, setRecipes] = useState([]);

    const handleSubmit = () => {
        return null;
    }

    return (
        <div className='bg-black'>
            <form>
                <div>
                    <label>Enter a food:</label>
                    <input type='text'></input>
                </div>
            </form>

            {recipes.length >= 0 & 
            <div>
                Make component for rendering all recipes
            </div>
            }
        </div>
    );
}

export default FindRecipes;