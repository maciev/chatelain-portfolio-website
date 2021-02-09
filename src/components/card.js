import React from "react"

const Card = ({ video, title, stack, description, date }) => {
  return (
    <div class="flex flex-col py-4 items-center">
      <video
        class="w-full xl:w-1/2 lg:w-2/3 md:w-4/5 shadow-md rounded-lg"
        src={video}
        preload="auto"
        autoPlay="autoplay"
        loop="loop"
        track="false"
        muted="muted"
        playsinline="playsInline"
      ></video>
      <div class="bg-white w-full max-w-lg rounded-md px-4 py-2 mt-4 shadow-md flex flex-col items-start">
        <h1 class="font-bold text-lg">{title}</h1>
        <h3 class="font-bold text-sm">{stack}</h3>
        <p class="py-4">{description}</p>

        <div class="w-full md:w-1/3 text-sm font-medium">{date}</div>
        <div class="2/3">
          <div class="text-sm font-small pt-2">
            <a>SEE IT IN ACTION</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
