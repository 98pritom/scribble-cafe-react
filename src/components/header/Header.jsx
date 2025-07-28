import React from 'react';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center p-4 mx-4 border-gray-200 border-b-2'>
                <h1 className='text-4xl font-bold'>Scribble Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;