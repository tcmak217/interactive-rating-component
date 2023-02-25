import React from "react"
import thanksImage from "../../images/illustration-thank-you.svg"

function ThanksCard({ rating }: { rating: number | null }) {
  return (
    <div className="bg-[hsl(215,20%,15%)] w-[320px] h-[360px] rounded-3xl">
      <div className="w-full h-full flex flex-col p-8 gap-4 items-center justify-center">
        <div className="w-[150px]">
          <img src={thanksImage} alt="thank you image" />
        </div>
        <div>
          <div className="text-orange text-sm">You selected {rating} out of 5</div>
        </div>
        <div className="text-white text-2xl font-bold">Thank you!</div>
        <div className="text-light-grey text-sm text-center">
          We appreciate you taking the time to give a rating. If you ever need more support, don't
          hesitate to get in touch!
        </div>
      </div>
    </div>
  )
}

export default ThanksCard
