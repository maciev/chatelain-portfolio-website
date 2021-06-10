import React from "react"

function Blogcard() {
  return (
    <div class="flex items-center w-72 border-2 border-red-400 flex-col">
      <img
        class="rounded"
        src="https://dwinawan.com/blog/thumb_article9.jpg"
        alt=""
      />

      <div class=" w-full max-w-lg mt-2 flex flex-col items-start">
        <h1 class="font-bold text-xs text-gray-400 pb-2">June 9, 2021</h1>
        <h3 class="font-bold text-lg pb-2">
          How to easily pass Props to React Components
        </h3>
        <p class="font-bold text-xs text-gray-400 pb-2">
          There are several ways to pass props and state in React. In this blog,
          we'll show you the most efficient way.'
        </p>
      </div>
    </div>
  )
}

export default Blogcard
