import React from 'react'
import "./updatenews.css"

const Updatenews = () => {
  return (
    <div className='updatenews'>
        <h1>Receive Promotions In Your Email</h1>
        <p>Subscribe to our update news </p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Updatenews