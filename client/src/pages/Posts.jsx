// import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../App.css'
import AddPost from './AddPost';

export default function Posts(props) {
    return (
        <>
            <Header name="Posts" />                                 
            <h1 className='posts-header'>This is a page for all the posts</h1>
        </>
      )
}
