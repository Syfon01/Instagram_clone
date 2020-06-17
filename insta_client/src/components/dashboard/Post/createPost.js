import React, { useState ,useEffect} from 'react'
import M from 'materialize-css'
import {history, useHistory} from 'react-router-dom'

const CreatePost = () => {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  useEffect(() => {
    if (url) {
      fetch('/create/post', {
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            M.toast({
              html: data.error,
              classes: "#b71c1c red darken-4"
            });
          } else {
            M.toast({
              html: 'Post Created successfully',
              classes: "#1b5e20 green darken-4"
            });
            history.push('/')
          }
        }).catch(err => {
          console.log(err)
        })
    }
  },[url]) 
  const sendDetails = () => {
    const data = new FormData()
    data.append('file',image)
    data.append('upload_preset', 'instagram_clone')
    data.append('cloud_name', 'syfon')
    fetch('https://api.cloudinary.com/v1_1/syfon/image/upload', {
      method: 'post',
      body: data
    }).then(res => res.json())
      .then(data => {setUrl(data.url)})
      .catch(err => console.log(err))
    
    
  }
  return (
    <div style={{
      maxWidth: '34.5rem',
    margin: '3.25rem auto'}}>
     
      <div className="card" style={{padding:'1.25rem'}}>
        <input type="text" placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" placeholder="Post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        
        <div className="file-field input-field">
      < div className = "btn #90caf9 blue lighten-2" >
        <i className="material-icons" style={{color:'white'}}>add_a_photo</i>
            <input type="file" 
              // value={image}
              onChange={(e) => setImage(e.target.files[0])}  
            />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
      </div>
        </div>
        <button className="btn waves-effect waves-light #90caf9 blue lighten-3 btn-auth"
          type="submit " name="action"
        onClick={() => sendDetails()}
        >
          Submit Post
          </button>
      </div>
    </div>
  )
}

export default CreatePost