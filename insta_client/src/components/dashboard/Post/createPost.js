import React from 'react'

const createPost = () => {
  return (
    <div style={{
      maxWidth: '34.5rem',
    margin: '3.25rem auto'}}>
     
      <div className="card" style={{padding:'1.25rem'}}>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="Post" />
        <div className="file-field input-field">
      < div className = "btn #90caf9 blue lighten-2" >
        <i className="material-icons" style={{color:'white'}}>add_a_photo</i>
        <input type="file" multiple/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
      </div>
        </div>
        <button className="btn waves-effect waves-light #90caf9 blue lighten-3 btn-auth"
          type="submit " name="action">
          Submit Post
          </button>
      </div>
    </div>
  )
}

export default createPost