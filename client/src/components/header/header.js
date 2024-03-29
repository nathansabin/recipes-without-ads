import React from 'react';

function Header() {
    return (
        <header className='w-full h-20 mx-auto bg-amber-400'>
            <div className='w-3/4 h-full mx-auto '>
                <h1 className='text-right text-white text-5xl text-light mx-auto'>
                    <span className='text-bold text-6xl'>Recipes</span> without ads
                </h1>
            </div>
        </header>
    );
}

export default Header;