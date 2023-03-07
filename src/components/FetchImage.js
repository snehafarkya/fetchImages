import React, { useState } from 'react'

function FetchImage() {

const [images,setImages] = useState([])

  const fetchImageApi=(e)=>{
   fetch('https://api.unsplash.com/photos/?client_id=ZhMkGK8Y_HYk1CBvC8EYT2U5OWasd6K7mORhMsu-x_E')
    // let res = response.json();
    .then((response) => response.json())
  .then((json) => {
    console.log(json)
    setImages(json)
  })
    
  }

  return (
    <div>
      <button onClick={fetchImageApi} className='btn'>Fetch Image</button>
      <div className='photos'>
        {images.map((image)=>{
          return <>
            <img src={image.urls.thumb} alt="" />
          </>
        })}
      </div>
    </div>
  )
}

export default FetchImage