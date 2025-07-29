import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 border-2 border-gray-200 rounded-lg md:p-2 md:ml-4 md:mt-2 p-4 mx-4'>
            <div className='bg-purple-100 border-2 border-purple-600 rounded-lg px-4 py-3 text-purple-800 font-bold mb-4'>
                <h3>Reading Time: {readingTime} min</h3>
            </div>
            <h2 className='text-2xl'>Bookmarks: {bookmarks.length}</h2>
            <div className='min-h-[200px] max-h-[400px] overflow-y-auto'>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div >
    );
};

export default Bookmarks;