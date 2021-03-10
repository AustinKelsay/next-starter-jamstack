import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet" /> 
    </Head>
    <h1 className='header'>Reclaim</h1>

    <h3>Reclaim is an open source desktop app for your personal online information. With Reclaim you can collect your social media data in a few clicks and explore every photo, friend, and intereaction from your digital life.</h3>

    <button className='btn'>Reclaim your data</button>
    <div className='input-container'>
      <h4>Join our email list to get early access to features, updates, and exclusive discounts as we expand Reclaim</h4>
      <input type='text' placeholder='example@email.com' />
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
        font-weight: 800;
      }
      h3 {
        margin-bottom: 5%;
      }
      .btn {
        padding: 1%;
        margin-bottom: 5%;
        background: linear-gradient(to bottom right, #d7d6d6, #6e54c4);
        border: 1px solid white;
        border-radius: 5px;
        cursor: pointer;
      }
      .btn:hover {
        opacity: 0.8;
      }
      .input-container {
        margin: 3% auto;
        margin-top: 15%;
      }
    `}</style>
  </div>
)

export default Home
