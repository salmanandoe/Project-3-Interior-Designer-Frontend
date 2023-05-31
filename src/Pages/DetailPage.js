import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function DetailPage() {
const [imageData, setImageData] = useState([])

const fetchDesignImg = async () => {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id")
    
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    const url = `${backendUrl}/design/id/${id}`
    
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


    return (
        <>
            <div>
                <img className="detail-page" src={imageData.imageURL} />
            </div>
            
            <div>
                <Link className="back-button" to="/gallery">
                    <h3>Back to gallery</h3>
                </Link>
            </div>
    </>
  )
}

export default DetailPage;