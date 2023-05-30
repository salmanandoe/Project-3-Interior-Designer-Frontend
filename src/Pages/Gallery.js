import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


function Gallery() {
const [imageData, setImageData] = useState([])

const fetchDesignImg = async () => {
    const url = `http://localhost:4000/design`
    try {
        const response = await fetch(url)
        const data = await response.json()
        setImageData(data)
        console.log(data)
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
                Bedrooms
            </h3>
                {showImage('bedroom')}
            <h3> 
                Bathrooms
            </h3>
                {showImage('bathroom')}
            <h3> 
                Living Rooms
            </h3>
                {showImage('living room')}
            <h3> 
                Kitchens
            </h3>
                {showImage('kitchen')}
            <h3> 
                Dining Rooms
            </h3>
                {showImage('dining room')}
            <h3>
                Laundry Rooms
            </h3>
                {showImage('laundry room')}
        
    </div>
  )
}

export default Gallery