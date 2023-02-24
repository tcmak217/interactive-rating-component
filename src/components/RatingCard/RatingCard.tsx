import React from "react"
import startIcon from "../../images/icon-star.svg"

function RatingCard() {
  return (
    <div className="bg-dark-blue w-[320px] h-[400px] rounded-3xl">
      <div className="w-full h-full flex flex-col p-8">
        <div className="grow">
          <img src={startIcon} alt="star icon" />
        </div>
        <div className="text-white grow">How did we do?</div>
        <div className="text-light-grey grow">
          Please let us know how we did with your support request.All feedback is appreciated to
          help us improve our offering!
        </div>
        <div className="flex flex-row grow justify-between">
          <button className="w-10 h-10 text-light-grey bg-medium-grey active:bg-orange active:text-white rounded-full">
            1
          </button>
          <button className="w-10 h-10 text-light-grey bg-medium-grey active:bg-orange active:text-white rounded-full">
            2
          </button>
          <button className="w-10 h-10 text-light-grey bg-medium-grey active:bg-orange active:text-white rounded-full">
            3
          </button>
          <button className="w-10 h-10 text-light-grey bg-medium-grey active:bg-orange active:text-white rounded-full">
            4
          </button>
          <button className="w-10 h-10 text-light-grey bg-medium-grey active:bg-orange active:text-white rounded-full">
            5
          </button>
        </div>
        <button className="text-white grow bg-orange rounded-full uppercase active:bg-white active:text-orange">
          Submit
        </button>
      </div>
    </div>
  )
}

export default RatingCard
