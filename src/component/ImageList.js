  import React from 'react'

  const ImageList = (props) => {
      const disp = props.images.map((image) => {
            return <img key={image.id} className="images" src={image.webformatURL} alt="images"/>
      })
      return (
          <div className='imagediv'>
              {disp}
          </div>
      )
  }

  export default ImageList;