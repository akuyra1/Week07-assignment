// import React from 'react'
import AddPost  from '../pages/AddPost'
import Home  from '../pages/Home'
import Posts  from '../pages/Posts'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <>
      <nav>
          <ul>
            {/* <h1>{props.nameOfPage}</h1> */}
            <Link to="/addPost">addPost</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/">Home</Link>
          </ul>
      </nav>
    </>
  )
}
