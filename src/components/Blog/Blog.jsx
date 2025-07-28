import React from 'react';

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, author, author_image, cover_image, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img src={cover_image} alt={`Cover image of ${title}`} />
            <div className='flex justify-between items-center'>
                {/* author img */}
                <div className='flex items-center gap-2'>
                    <img className='w-14 h-14 rounded-full object-cover' src={author_image} alt={`Author image of ${author}`} />
                    <div>
                        <h4 className='font-semibold'>{author}</h4>
                        <p className='text-sm font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                {/* reading time */}
                <div>
                    <p>{reading_time}</p>
                </div>
            </div>
            <h3>{title}</h3>
            <p>
                {
                    hashtags.map(hashtag => <span className='pr-2 text-gray-500 font-light' key={hashtag}><a href="#">{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;