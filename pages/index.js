import React, { Component, useEffect, useState } from "react"
import axios from "axios"
import ImageWrapper from "../components/ImageWrapper"
import InfiniteScroll from "react-infinite-scroller"
import SearchBar from "../components/SearchBar"

import "./index.css"
const APP_ID =
  // "40ccb0c7498a3968ef87cb8aaf6e239d6d319157718c550adfe4b74942ffbc7d"
  // "75c17e375bb7f1947c0d7a32bbb85266511f0b099485492db887fb79c6ef40e6"
  // "5fb3168316b9dbcd49a7a52129ae0f48c358dda1915d87bd96f7b7c3a35bf3b2"
  "75eab7600bf1c0159118b5d5fedfa1d2c16a2c1ec2c14dab57832738852ee432"
// "895610a3fb50700d2debe54878a3a62fd03e5ef1702228170fd8aff327db6f1a"
class Index extends Component {
  state = {
    isSearching: false,
    images: [],
    search: "",
    result: [],
  }
  searchImages() {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${
          this.state.search
        }&client_id=${APP_ID}`,
      )
      .then(data => {
        this.setState({
          result: [...this.state.result, ...data.data.results],
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  onSearch(val) {
    this.setState({
      search: val,
      isSearching: true,
    })
  }
  getImages(count = 10) {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${APP_ID}&count=${count}`,
      )
      .then(data => {
        this.setState({
          images: [...this.state.images, ...data.data],
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getImages()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        result: [],
      })
      this.searchImages()
    }
  }

  render() {
    const { images, result, isSearching } = this.state
    return (
      <div className="wrapper">
        <SearchBar onSearch={val => this.onSearch(val)} />
        <InfiniteScroll
          loadMore={
            result.length ? () => this.searchImages() : () => this.getImages(5)
          }
          pageStart={0}
          hasMore={true}
          loader={<div className="loader" key={0} />}
        >
          <div className="image-grid">
            {isSearching
              ? result.map((item, idx) => {
                  return <ImageWrapper url={item.urls.small} key={idx} />
                })
              : images.map((item, idx) => {
                  return <ImageWrapper url={item.urls.small} key={idx} />
                })}
          </div>
          {}
        </InfiniteScroll>
      </div>
    )
  }
}

export default Index
