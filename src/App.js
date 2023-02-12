import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UNSPLASH_ACCESS_KEY } from './config/constants';
import './App.css';

const App = () => {
    const [imageList, setImageList] = useState([])

    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/collections?client_id=${UNSPLASH_ACCESS_KEY}&per_page=12&query=Nepal`)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.results)
                    setImageList(res.data.results)
                }
            })
    }, [])

    return (
        <div>
            <h1 className="heading">Snap Gallery</h1>
            <div className="image-list">
                {imageList.map((image, index) => {
                    return (
                        <figure className="image">
                            <img src={image.cover_photo.urls.regular} alt={image.cover_photo.alt_description} key={index} />
                        </figure>
                    )
                })}
            </div>
        </div>
    )
}

export default App