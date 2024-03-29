import React from 'react';

function Sidebar() {
    return (
        <nav className='bg-red-300 w-48 h-full p-2 text-gray-100 rounded'>
            <div className='mb-4 mt-3 ml-4'>
                <h4 className='text-xl mb-1'>Account</h4>
                <hr />
                <div className='flex flex-col'>
                    <button className='text-left hover:text-amber-300'>Login</button>
                    <button className='text-left hover:text-amber-300'>Register</button>
                </div>
            </div>
            <div className='mb-4 mt-3 ml-4 pb-4'>
                <h4 className='text-xl mb-1'>Saved Recipes</h4>
                <hr />
                <div className='flex flex-col'>
                    <p className='text-left'>Please log in</p>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;