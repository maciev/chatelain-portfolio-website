import React from "react"

function Blogcard() {
  return (
    <div class="flex items-center h-full flex-row ">
      <div class="flex flex-col items-center">
        <div class="bg-white w-full max-w-lg px-4 mt-4 bg-red-300 flex flex-col items-start">
          <h1 class="font-bold text-lg">sdfsdfsdf</h1>
          <h3 class="font-bold text-sm">sdfsdfsdfs</h3>
          <p class="py-4">sdfsdfsdfsdf</p>

          <div class="w-full md:w-1/3 text-sm font-medium">sdgsegdsgs</div>
          <div class="2/3">
            <div class="text-sm font-small pt-2">
              <a>SEE IT IN ACTION</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          class="w-2/3"
          src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Blogcard
