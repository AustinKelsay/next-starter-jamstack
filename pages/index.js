import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </Head>
      <h1 className='header'>Reclaim</h1>
      <div className='top-container'>
        <h3>Reclaim is an open source desktop app for your personal online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and intereaction from your digital life.</h3>
        <button className='btn'>Reclaim your data</button>
      </div>
      <Image
        src={'/reclaim.png'}
        width={700}
        height={420}
      />
      <div className='input-container'>
        <h4>Join our email list to get early access to features and updates as we expand Reclaim</h4>
        <input type='text' placeholder='example@email.com' />
        <button type='submit'>Submit</button>
      </div>
    
    <style jsx>{`
    :global(html,body) {
      margin: 0;
      padding: 0;
      height: 100%;
    }
    
    :global(body) {
      font-size: calc(10px + 1vmin);
      font-family: 'Source Code Pro', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #282c34;
      color: white;
    }
    .header {
      font-family: Audiowide;
      font-weight: 800;
    }
    h3 {
      margin-bottom: 3%;
    }
    .btn {
      width: 15%;
      padding: 1%;
      margin-bottom: 1%;
      background: linear-gradient(to bottom right, #d7d6d6, #6e54c4);
      border: 1px solid white;
      border-radius: 5px;
      cursor: pointer;
      font-family: 'Source Code Pro', monospace;
      color: black;
      font-size: 1rem;
      font-weight: 600;
    }
    .btn:hover {
      opacity: 0.8;
    }
    .input-container {
      display: flex;
      flex-direction: column;
      margin: 1% auto;
      margin-top: 3%;
    }
    .input-container input {
      width: 10%;
      margin: 0 auto;
    }
    .input-container button {
      width: 6%;
      margin: 0.1% auto;
    }
    .top-container {
      width: 90%;
      margin: 1% auto;
    }
    `}</style>
    </div>
    );
  }
    
    export default Home
    