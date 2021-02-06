import React from "react"

function Card() {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div class="flex flex-wrap px-6">
          {/*if you want to expand width, do it here*/}
          <div class="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
            <div class="bg-white hover:shadow-xl">
              <div class="">
                <img
                  src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  class="h-56 w-full border-white border-8 hover:opacity-25"
                ></img>
                <div class="px-4 py-4 md:px-10">
                  <h1 class="font-bold text-lg">Reddit Clone</h1>
                  <h3 class="font-bold text-medium">
                    Stack: React, TypeORM, PostgreSQL, Typescript, TailwindCSS
                  </h3>
                  <p class="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi quas sapiente voluptate earum natus facilis dolor
                    deserunt dolorum tempora obcaecati consequatur rem, vel
                    distinctio perferendis tempore nemo sequi eos accusantium.
                  </p>
                  <div class="flex flex-wrap pt-8">
                    <div class="w-full md:w-1/3 text-sm font-medium">
                      NOVEMBER 1,2019
                    </div>
                    <div class="2/3">
                      <div class="text-sm font-small pt-2">
                        <a>SEE IT IN ACTION</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
