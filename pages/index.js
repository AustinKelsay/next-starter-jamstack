import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
      </Head>
      <div className='top-container'>
        <h1 className='header'>Reclaim</h1>
        <h3 className='tagline'>A hub for your personal data</h3>
      </div>
      <a href="https://github.com/reclaimapp/reclaim" className='github-button'>Github</a>
      <iframe className='email-component' src="https://c7ad2f4f.sibforms.com/serve/MUIEACMHabLE04CPqDpq3mOc2mLaeeIVDZKIgfww6L8s3ZWSbk-sbCeL-kIXDy7f2VuMELe-0d8zv5Mrn8DDoDkPnWdTokrU85wJUsmoKTEDdmhkRm5igSflinFRJTTDlt53FDCasZr_ySS0iH3Uom0faw9iWmaMlS75J2ndPSFm16V1cwVbrHOOuyOaX_WYlpBfV8jg25hcxZFG" 
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
      justify-content: space-between;
      text-align: center;
      background-color: #282c34;
      color: white;
    }
    .header {
      font-family: Audiowide;
      font-weight: 800;
      font-size: 3rem;
      margin-top: 0.5%;
      margin-bottom: 0;
    }
    h3 {
      margin-bottom: 1%;
      margin-top: 1%;
      font-size: 1.1rem;
    }
    .tagline {
      margin-bottom: 1%;
      margin-top: 1%;
      font-size: 1.4rem;
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
      margin: 1% auto;
      margin-bottom: 3%;
    }
    .email-component {
      height: 80vh;
      width: 90vw;
    }
    .github-button {
      padding: 1%;
      border: 2px solid black;
      border-radius: 5px;
      background: linear-gradient(to bottom right, oldlace, #6e54c4);
      color: black;
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      padding-top: 0.5%;
      padding-bottom: 0.5%;
    }
    .github-button:hover {
      opacity: 0.7;
    }
    @media(max-width: 500px) {
      .email-component {
        height: 165vh;
        width: 95vw;
      }
    }
    `}</style>
    </div>
    );
  }
    
    export default Home
    