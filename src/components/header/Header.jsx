import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-4 border-gray-200 border-b-2'>
                <h1 className='text-4xl font-bold'>Scribble Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;