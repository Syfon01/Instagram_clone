import React from 'react'

const profile = () => {
  return (
    <div>
      <div style={{
          margin: '18px 0px',
          display: 'flex',
        justifyContent: 'space-around',
          borderBottom: '1px solid #f3f3f3'
      }}>
        <div>
        < img src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png"
        alt="" style = {
          {
            width: "160px",
            height: "160px",
            borderRadius: "80px",
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
        < img className="gallery-image" src="https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          <img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          < img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          < img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
          < img className="gallery-image" src = "https://res.cloudinary.com/syfon/image/upload/v1589645160/userimage.png" alt="" />
        
      </div>
    </div>
  )
}

export default profile