import React from 'react';

function Header() {
    return (
        <header className='w-full h-14 mx-auto bg-amber-200'>
            <div className='w-3/4 h-full mx-auto '>
                <h1 className='text-left text-white text-3xl text-light mx-auto'>
                    <span className='text-bold text-6xl'>Recipes</span> without ads
                </h1>
            </div>
        </header>
    );
}

export default Header;