import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


function Gallery() {
const [imageData, setImageData] = useState([])

const fetchDesignImg = async () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    const url = `${backendUrl}/design`
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        setImageData(data)
        
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    fetchDesignImg()
}, [])

const showImage = (room) => {
    
    return imageData.map((img) => { 
        if (room === img.name) {
            return (
                <div>
                    {/* {img.name} */}
                    <Link to={`/gallery/detail?id=${img._id}`}>
                        <img className="img-preview" src={img.imageURL}></img>
                    </Link>
                </div>
            )
        }
        
    })

}


    return (

    <div className="gallery">
    
            <h3> 
                BEDROOMS
            </h3>
                {showImage('bedroom')}
            <h3> 
                BATHROOMS
            </h3>
                {showImage('bathroom')}
            <h3> 
                LIVING ROOMS
            </h3>
                {showImage('living room')}
            <h3> 
                KITCHENS
            </h3>
                {showImage('kitchen')}
            <h3> 
                DINING ROOMS
            </h3>
                {showImage('dining room')}
            <h3>
                LAUNDRY ROOMS
            </h3>
                {showImage('laundry room')}
        
    </div>
  )
}

export default Gallery;