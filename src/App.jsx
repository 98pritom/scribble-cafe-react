
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (blog) => {
    // console.log('bookmark added', blog);
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
