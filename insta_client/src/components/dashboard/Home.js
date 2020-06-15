import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
      <h5>Syfon Isaac</h5>
        <div className="card-image">
          < img src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png"
          alt = "user-img" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{color:'red'}}>favorite</i>
          <h5>Title</h5>
          <p>What is this about</p>
          <input type="text" placeholder="Add a comment"/>
        </div>
      </div>

        <div className="card home-card">
        <h5>Syfon Isaac</h5>
        <div className="card-image">
          < img src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png"
          alt = "user-img" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{color:'red'}}>favorite</i>
          <h5>Title</h5>
          <p>What is this about</p>
          <input type="text" placeholder="Add a comment"/>
        </div>
      </div>

        <div className="card home-card">
        <h5>Syfon Isaac</h5>
        <div className="card-image">
          < img src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="user-img" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{color:'red'}}>favorite</i>
          <h5>Title</h5>
          <p>What is this about</p>
          <input type="text" placeholder="Add a comment"/>
        </div>
      </div>
    </div>
  )
}

export default Home