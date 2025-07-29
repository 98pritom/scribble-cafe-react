import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 border-2 border-gray-200 rounded-lg md:p-2 md:ml-4 md:mt-2 p-4 mx-4'>
            <div>
                <h3>Reading Time: {readingTime} min</h3>
            </div>
            <h2 className='text-2xl'>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div >
    );
};

export default Bookmarks;