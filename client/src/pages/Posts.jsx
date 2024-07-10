// import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../App.css'
import AddPost from './AddPost';

export default function Posts(props) {
    return (
        <>
            <Header name="Posts" />                                 
            <h1 className='posts-header'>No posts available, awaiting <span className='random-span'>supernova</span> for creation.</h1>
        </>
      )
}
