import React, { useEffect } from "react"
import Blogcard from "../components/blogcard"
import Largecard from "../components/largecard"
import Header from "../components/header"
import { useState } from "react"

function Blog() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col items-start mx-48 ">
        <h1 className="ml-4">Blog 2 ✍</h1>
        <Largecard />
        {width > 1024 ? (
          <div className="flex flex-row w-full pt-16">
            <Blogcard />
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
        ) : (
          <div className="flex flex-row w-full pt-16">
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
