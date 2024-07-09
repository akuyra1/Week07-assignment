// import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../App.css'

export default function Home() {
  return (
    <>
        <Header name="Home Page"/>
        <h1 className='home-header'>This is the Home Page!</h1>

    </>
  )
}
