import React from "react"
import Blogcard from "../components/blogcard"
import Header from "../components/header"
function Blog() {
  return (
    <div className="h-full bg-gray-50">
      <Header className="bg-red-300" />
      <div className="flex flex-col max-w-4xl pt-16 m-auto">
        <h1>Blog ✍</h1>
        <Blogcard />
      </div>
    </div>
  )
}

export default Blog
