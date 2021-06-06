import React from "react"
import Blogcard from "../components/blogcard"
function Blog() {
  return (
    <div>
      <div className="flex flex-col max-w-4xl pt-16 m-auto">
        <h1>Blog ✍</h1>
        <Blogcard />
        <Blogcard />
        <Blogcard />
        <Blogcard />
      </div>
    </div>
  )
}

export default Blog
