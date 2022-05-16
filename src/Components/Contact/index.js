import React from 'react'
import "./App.css"

const index = () => {
  return (
    <>
      <div className="container">
          <h1>
              Contact Me
          </h1>
          <div className="form">
              <input type="text" name='name'id='name' placeholder='Name '/>
              <input type="number" name="number" id="number" placeholder='Contact Number' />
              <input type="email" name="email" id="email" placeholder='Email Address'/>
              <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder=' Why do you want contact me'></textarea>
              <button>Submit</button>

          </div>
      </div>
    </>
  )
}

export default index
