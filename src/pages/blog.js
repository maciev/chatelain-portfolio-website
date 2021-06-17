import React from "react"
import Blogcard from "../components/blogcard"
import Largecard from "../components/largecard"
import Header from "../components/header"

function Blog() {
  return (
    <div className="h-full bg-gray-50">
      <Header />
      <div className="flex flex-col items-start mx-48 ">
        <h1 className="ml-4">Blog 2 ✍</h1>
        <Largecard />
        <div className="flex flex-row w-full pt-16">
          <Blogcard />
          <Blogcard />
          <Blogcard />
        </div>
      </div>
    </div>
  )
}

export default Blog
