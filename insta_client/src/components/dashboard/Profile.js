import React from 'react'

const profile = () => {
  return (
    <div style={{
      maxWidth: '40.625rem',
      margin:'0px auto'
    }}>
      <div style={{
          margin: '1.125rem 0rem',
          display: 'flex',
        justifyContent: 'space-around',
          borderBottom: '1px solid #f3f3f3'
      }}>
        <div>
        < img src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png"
        alt="" style = {
          {
            width: "10rem",
            height: "10rem",
            borderRadius: "5rem",
            border: "2px solid #f1f1f1"
          }
        }
        />
      </div>
        <div><h5>Syfon</h5>
          <div style={{
            display: "flex",
            justifyContent: 'space-between',
            width: '108%'
          }}>
            <p>50 Posts</p>
            <p>5 Followers</p>
            <p>60 Following</p>

            </div>
          </div>
      </div>
      
      <div className="gallery">
          <img className="gallery-image" src="https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          <img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          <img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          <img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          <img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
        
      </div>
    </div>
  )
}

export default profile