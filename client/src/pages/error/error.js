import React from 'react';

function Error() {
    return (
        <div className='w-full h-auto mt-4'>
            <div className='w-4/5 h-auto mx-auto bg-red-300 flex flex-col text-center rounded py-12 px-4'>
                <h2 className='text-4xl  text-white'>Error finding page</h2>
                <span className='font-xl pt-3 pb-2 text-white '>Please try another recipe...</span>
                <a href='/'><button className='bg-amber-300 w-36 h-16 text-xl rounded text-white font-lg hover:bg-amber-500 hover:text-red-200'>Home</button></a>
            </div>
        </div>
    );
}

export default Error;