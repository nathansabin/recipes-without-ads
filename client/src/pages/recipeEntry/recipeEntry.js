import React, { useEffect,useState } from 'react';
import axios from 'axios';

function RecipeEntry() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            let data = JSON.parse(localStorage.getItem("recipe"));
            setUserData(data);
            grabData(data);
        } catch {
            console.log("err");
            window.location.assign('/error');
        }
    },[]);

    

    const grabData = async (recipeData) => {
        try {
            const fetchData = await axios.post('http://localhost:3001/api/recipe/', recipeData, {
                headers: {
                  'Content-Type': 'application/json'
                }
            });

            setLoading(true);
            setUserData(fetchData.data);
            console.log(fetchData.data);
        } catch (error) {
            console.log("error from fetch", error);
            window.location.assign('/error');
        }
    }

    if (!loading) {
        return (
            <div className='mx-auto my-auto text-5xl text-white'>
                <span>Loading...</span>
            </div>
        )
    }

    return (
        <div className='w-full h-auto my-3 pb-12 mb-24'>
            <div className='h-auto w-5/6 pt-3 bg-red-300 mx-auto rounded-md'>
                <h2 className='text-white pl-8 mb-4 text-4xl'>{userData.title}</h2>
                <div className='flex flex-row'>
                    <div className='mx-auto'>
                        <img className="" src={userData.image}></img>
                    </div>
                    <ol className='mx-auto text-amber-200'>
                        <span className='text-2xl'>Ingredients</span>
                        <hr/>
                        {userData.ingredients.map((data, id) => {
                            return(
                            <li key={id}>
                                <h5 className='text-lg mx-auto'>{data}</h5>
                            </li>
                            );
                        })}
                    </ol>
                </div>
                <ol className='w-100 mx-auto mt-10 text-lg'>
                        {userData.directions.map((data, id) => {
                            return(
                            <li id={id} className="text-white pb-8 px-8" key={id}>
                                <span className='text-xl mx-auto ml-20 flex text-center'>Step {id+1}</span>
                                <hr className='text-amber-200 w-6/12 mb-2'/>
                                <p className='text-base'>{data}</p>
                            </li>
                            );
                        })
                    }
                </ol>
            </ div>
        </div>
    );
}

export default RecipeEntry;