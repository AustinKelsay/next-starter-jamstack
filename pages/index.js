import React from 'react'
import Head from 'next/head'

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
        <h3>Reclaim is an open source desktop app for your personal online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and interaction from your digital life.</h3>
      </div>
      <iframe className='email-component' src="https://c7ad2f4f.sibforms.com/serve/MUIEAEtphHQDTuZROGG-FTmoBbEmkeYkn4e-Hn292_wis9MqSZtOvpsg1pYE7KCUQYab172rp8s6-vWRWod91iDPoKAc4jTfUwX899YIwD1ThXKCHNkulD0n4BgnMw0b3UBS72Gs1bZLYkmLxgqyqZEUOYXG_RioWHq84hFEmbD1y9gHTv7ePSGC_kAW9LzGhPopL2AoPWn28X2H" 
      frameborder="0" scrolling="auto" allowfullscreen style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}></iframe>
    
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
    }
    h3 {
      margin-bottom: 1%;
    }
    .btn {
      padding: 1%;
      margin-bottom: 1%;
      background: linear-gradient(to bottom right, #d7d6d6, #6e54c4);
      border: 1px solid white;
      border-radius: 5px;
      cursor: pointer;
      font-family: 'Source Code Pro', monospace;
      color: black;
      font-size: 1rem;
      font-weight: 800;
    }
    .btn:hover {
      opacity: 0.8;
    }
    .top-container {
      width: 82%;
      padding: 0.1%;
      margin: 1% auto;
      margin-bottom: 3%;
    }
    .email-component {
      height: 69vh;
      width: 35vw;
    }
    `}</style>
    </div>
    );
  }
    
    export default Home
    