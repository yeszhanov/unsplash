import React, { useEffect, useState } from "react"
import axios from "axios"
import ImageWrapper from "../components/ImageWrapper"
import InfiniteScroll from "react-infinite-scroller"
import SearchBar from "../components/SearchBar"
import "./index.css"
const APP_ID =
  "75c17e375bb7f1947c0d7a32bbb85266511f0b099485492db887fb79c6ef40e6"
// "5fb3168316b9dbcd49a7a52129ae0f48c358dda1915d87bd96f7b7c3a35bf3b2"

const Index = () => {
  const [images, setData] = useState([])

  useEffect(() => {
    getImages()
  }, [])
  const getImages = (count = 10) => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${APP_ID}&count=${count}`,
      )
      .then(data => {
        setData([...images, ...data.data])
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="wrapper">
      <SearchBar />
      <InfiniteScroll
        loadMore={() => getImages(5)}
        pageStart={0}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <div className="image-grid">
          {images
            ? images.map((item, idx) => {
                return <ImageWrapper url={item.urls.small} key={idx} />
              })
            : null}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Index
