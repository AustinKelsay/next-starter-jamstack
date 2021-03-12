import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Roboto:ital,wght@0,300;1,300&family=Source+Code+Pro:ital,wght@1,300&display=swap" rel="stylesheet" /> 
      </Head>
      <div className='top-container'>
        <h1 className='header'>Reclaim</h1>
        <Link href="/about">
          <button className='btn'>About us</button>
        </Link>
        <h3>Reclaim is an open source desktop app for your personal online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and interaction from your digital life.</h3>
      </div>
      <div className='about-container'>
        <div className='about-card'>
            <h2>Austin Kelsay</h2>
            <p className='about-text'>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum</p>
        </div>
        <div className='about-card'>
            <h2>Royer Adames</h2>
            <p className='about-text'>Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum</p>
        </div>
      </div>
    
    <style jsx>{`
    :global(html,body) {
      margin: 0;
      padding: 0;
      height: 100%;
    }
    
    :global(body) {
      font-size: calc(10px + 1vmin);
      font-family: 'Inconsolata', monospace;
      font-family: 'Roboto', sans-serif;
      font-family: 'Source Code Pro', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      background-color: #282c34;
      color: white;
    }
    .header {
      font-family: Audiowide;
      font-weight: 800;
      text-decoration: underline;
      font-size: 3rem;
      margin-top: 0.5%;
      margin-bottom: 0;
    }
    h3 {
      margin-bottom: 1%;
    }
    .btn {
        padding: 0.4%;
        background: linear-gradient(to bottom right, #d7d6d6, #6e54c4);
        border-radius: 5px;
        cursor: pointer;
      }
      .btn:hover {
        opacity: 0.8;
      }
    .top-container {
      width: 82%;
      padding: 0.1%;
      margin: 1% auto;
      margin-bottom: 10%;
    }
    .about-container {
        width: 90%;
        margin: 1% auto;
        margin-bottom: 13%;
        display: flex;
        flex-direction: row;
        justify-contetn: space-between;
    }
    .about-card {
        width: 30%;
        padding: 1%;
        margin: 1% auto;
        border: 1px solid white;
        border-radius: 5px;
    }
    `}</style>
    </div>
    );
  }
    
    export default Home
    