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
        <h3>Reclaim is the hub for your personal data. Reclaim is an open source desktop app for collecting and storing personal online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and interaction from your digital life.</h3>
      </div>
      <iframe className='email-component' src="https://c7ad2f4f.sibforms.com/serve/MUIEAEtphHQDTuZROGG-FTmoBbEmkeYkn4e-Hn292_wis9MqSZtOvpsg1pYE7KCUQYab172rp8s6-vWRWod91iDPoKAc4jTfUwX899YIwD1ThXKCHNkulD0n4BgnMw0b3UBS72Gs1bZLYkmLxgqyqZEUOYXG_RioWHq84hFEmbD1y9gHTv7ePSGC_kAW9LzGhPopL2AoPWn28X2H" 
      frameBorder="0" scrolling="auto" allowFullScreen style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}></iframe>
    
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
      margin-bottom: 2%;
    }
    .email-component {
      height: 69vh;
      width: 40vw;
    }
    @media(max-width: 1600px) {
      .top-container {
        margin-bottom: 1%;
      }
    }
    @media(max-width: 1200px) {
      .email-component {
        height: 69vh;
        width: 50vw;
      }
    }
    @media(max-width: 1000px) {
      .email-component {
        width: 55vw;
      }
    }
    @media(max-width: 850px) {
      .email-component {
        width: 60vw;
      }
    }
    @media(max-width: 750px) {
      .email-component {
        width: 65vw;
      }
    }
    @media(max-width: 650px) {
      .email-component {
        width: 70vw;
      }
    }
    @media(max-width: 550px) {
      .email-component {
        width: 75vw;
      }
    }
    @media(max-width: 450px) {
      .email-component {
        width: 85vw
      }
      .header {
        margin-top: 15%;
      }
      .top-container {
        width: 95%;
      }
      h3 {
        margin-top: 0%;
      }
    }
    @media(max-width: 350px) {
      .email-component {
        width: 85vw
      }
    }
    @media(max-width: 330px) {
      .email-component {
        width: 90vw;
      }
    }
    @media(max-height: 850px) {
      .top-container {
        margin-bottom: 0;
      }
    }
    @media(max-height: 750px) {
      .header {
        margin-top: 2%;
      }
      .email-component {
        height: 55vh;
      }
    }
    @media(max-height: 650px) {
      .header {
        margin-top: 2%;
      }
      .email-component {
        height: 50vh;
      }
    }
    @media(max-height: 550px) {
      .email-component {
        height: 40vh;
      }
    }
    @media(max-height: 450px) {
      .header {
        margin-top: 3%;
      }
      .email-component {
        height: 35vh;
      }
    }
    @media(max-height: 350px) {
      .header {
        margin-top: 5%;
      }
      .email-component {
        height: 30vh;
      }
    }
    @media(max-height: 300px) {
      .email-component {
        height: 25vh;
      }
    }
    `}</style>
    </div>
    );
  }
    
    export default Home
    