import React from "react"

function Largecard() {
  return (
    <div className="flex flex-row items-center mt-12 ml-4 ">
      <img
        className="rounded w-96 "
        src="https://dwinawan.com/blog/thumb_article9.jpg"
        alt=""
      />

      <div className="flex flex-col w-full ml-4 ">
        <h1 className="pb-2 text-xs font-bold text-gray-400">June 9, 2021</h1>
        <h3 className="pb-2 text-lg font-bold">
          How to easily pass Props to React Components
        </h3>
        <p className="pb-2 text-xs font-bold leading-5 text-gray-400">
          There are several ways to pass props and state in React. In this blog,
          we'll show you the most efficient way.'
        </p>
      </div>
    </div>
  )
}

export default Largecard
