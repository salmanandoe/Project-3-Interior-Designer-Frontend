import { useState, useEffect } from "react";

function DetailPage() {
const [imageData, setImageData] = useState([])

const fetchDesignImg = async () => {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id")
    console.log(id)
    const url = 'http://localhost:4000/design/id/' + id
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


    return (

    <div className="detail-page">

        <img src = {imageData.imageURL} />
    
        
    </div>
  )
}

export default DetailPage