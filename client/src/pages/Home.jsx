// import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../App.css'

export default function Home() {
  return (
    <>
        <Header name="home"/>
        <h1 className='home-header'><span className='random-span'>Exploring</span> the Wonders of Our Solar System!</h1>

        <article className='home-article'>  
            <br/><h2 id='first-header'>Our Solar system</h2>
            <p>Our solar system is a vast and fascinating place, full of wonders that have intrigued humans for centuries. At its heart lies the Sun, a massive, glowing ball of gas that provides the energy necessary for life on Earth. But the Sun is just the beginning of the story.</p>
            <br/><br/><h2>Mercury</h2>
            <p><strong>Mercury</strong>, the closest planet to the Sun, is a scorched world with temperatures that can soar to over 800 degrees Fahrenheit. Despite its extreme conditions, Mercury has a rocky surface covered with craters from impacts that happened billions of years ago.</p>
            <br/><h2>Venus</h2>
            <p><strong>Venus</strong>, often called Earth's "sister planet" due to its similar size and composition. However, Venus is a hostile place with thick clouds of sulfuric acid and surface temperatures hot enough to melt lead. Its runaway greenhouse effect makes it a prime example of the importance of climate regulation.</p>
            <br/><h2>Earth</h2>
            <p>Our home, <strong>Earth</strong>, is unique in the solar system for its abundant liquid water and life. It has a perfect balance of conditions to support a diverse array of ecosystems and species, making it the crown jewel of our planetary neighborhood.</p>
            <br/><h2>Mars</h2>
            <p><strong>Mars</strong>, the Red Planet, has captivated our imagination for decades. With its dusty landscapes, towering volcanoes, and potential for ancient life, Mars is a prime candidate for future human exploration. Rovers like Curiosity and Perseverance are currently exploring its surface, searching for signs of past microbial life.</p>
            <br/><h2>Jupiter and Saturn</h2>
            <p>The gas giants, <strong>Jupiter</strong> and <strong>Saturn</strong>, are colossal planets with no solid surfaces. Jupiter, the largest planet in our solar system, is known for its Great Red Spot, a massive storm larger than Earth that has raged for centuries. Saturn, with its stunning ring system, is a favorite for astronomers and stargazers alike.</p>
            <br/><h2>Uranus and Neptune</h2>
            <p><strong>Uranus</strong> and <strong>Neptune</strong>, the ice giants, are distant, mysterious worlds. Uranus is unique for its tilted axis, causing it to roll around the Sun on its side. Neptune, with its striking blue color, has the fastest winds in the solar system, reaching speeds of over 1,200 miles per hour.</p>
            <br/><h2>Beyond the Planets</h2>
            <p>Beyond the planets, our solar system is teeming with other fascinating objects. The dwarf planet <strong>Pluto</strong>, once considered the ninth planet, resides in the Kuiper Belt, a region of icy bodies beyond Neptune. The asteroid belt between Mars and Jupiter is home to countless rocky remnants from the solar system's formation.</p>
            <p>Our solar system is a dynamic and ever-changing place, full of wonders waiting to be discovered. Whether you're fascinated by the possibility of life on Mars, the storms of Jupiter, or the icy mysteries of the outer planets, there's always something new to learn and explore.</p>
        </article>
    </>
  )
}
