import React from "react"

function Card() {
  return (
    <div class="flex flex-col p-4 max-w-screen-l items-center">
      <video
        class="w-full max-w-xs shadow-md"
        src="https://d33wubrfki0l68.cloudfront.net/6a3e28ebb4e48af0d98ed08fa70009bd0d4c7978/6c358/assets/img/add-new-task.mp4"
        preload="auto"
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        playsinline="playsInline"
      ></video>
      <div class="bg-white rounded-md px-4 py-2 mt-4 shadow-md">
        <h1 class="font-bold text-lg">Reddit Clone</h1>
        <h3 class="font-bold text-sm">
          Stack: React, TypeORM, PostgreSQL, Typescript, TailwindCSS
        </h3>
        <p class="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          quas sapiente voluptate earum natus facilis dolor deserunt dolorum
          tempora obcaecati consequatur rem, vel distinctio perferendis tempore
          nemo sequi eos accusantium.
        </p>
        <div class="flex flex-wrap pt-8">
          <div class="w-full md:w-1/3 text-sm font-medium">NOVEMBER 1,2019</div>
          <div class="2/3">
            <div class="text-sm font-small pt-2">
              <a>SEE IT IN ACTION</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
