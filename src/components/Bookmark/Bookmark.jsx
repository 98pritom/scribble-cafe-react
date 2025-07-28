import React from 'react';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-slate-100 p-4 m-2 rounded-lg shadow-md'>
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;