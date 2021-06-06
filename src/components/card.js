import React from "react"

const Card = ({ video, title, stack, description, date }) => {
  return (
    <div class="flex flex-col mx-auto py-4 items-center">
      <video
        class="w-full md:w-4/5 shadow-md rounded-lg"
        src={video}
        onMouseOver={event => event.target.play()}
        onMouseOut={event => event.target.pause()}
        loop="loop"
        track="false"
        muted="muted"
        playsinline="playsInline"
      ></video>
      <div class="bg-white md:w-4/5  rounded-md px-4 py-2 mt-4 shadow-md flex flex-col items-start">
        <h1 class="font-bold text-lg">{title}</h1>
        <h3 class="font-bold text-sm">{stack}</h3>
        <p class="py-4">{description}</p>

        <div class="w-full md:w-1/3 text-sm font-medium">{date}</div>

        <div class=" w-full text-sm font-small pt-2">
          <a>SEE IT IN ACTION</a>
        </div>
      </div>
    </div>
  )
}

export default Card
