import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='bg-dark bg-gradient news-letter'>
      <h1 className='text-light'>Get Exclusive Offers on your email</h1>
      <p className='text-light'>Subscribe to our newsletter and get 10% off your first purchase!</p>
      <div className="p-3 d-flex justify-content-center gap-3 email">
        <input type="email" placeholder="Enter your email address" />
        <button className='border-0 rounded-2 bg-warning text-dark'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
