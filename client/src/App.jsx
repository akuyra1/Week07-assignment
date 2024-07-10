import React, {useState, useEffect}from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Posts from './pages/Posts'
import AddPost from './pages/AddPost'
import './App.css';
import './components/Header.css'
import './assets/background3.jpg'


function App() {


  return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home/>} />
                <Route path='/posts' element={<Posts/>} />
                <Route path='/addPost' element={<AddPost/>} />
            </Routes>
        </>
  )
}

export default App
