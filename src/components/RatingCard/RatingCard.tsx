import React from "react"
import startIcon from "../../images/icon-star.svg"

function RatingCard() {
  return (
    <div className="bg-[hsl(215,20%,15%)] w-[320px] rounded-3xl">
      <div className="w-full h-full flex flex-col p-8">
        <div className="flex items-center mb-2">
          <div className="w-9 h-9 rounded-full bg-dark-blue flex justify-center items-center">
            <img className="w-3 h-3" src={startIcon} alt="star icon" />
          </div>
        </div>
        <div className="flex items-center my-2">
          <div className="text-white text-2xl font-bold">How did we do?</div>
        </div>
        <div className="flex items-center my-2">
          <div className="text-light-grey text-sm">
            Please let us know how we did with your support request. All feedback is appreciated to
            help us improve our offering!
          </div>
        </div>
        <div className="flex flex-row justify-between items-center my-4">
          <button className="w-10 h-10 text-light-grey bg-dark-blue active:bg-orange active:text-white rounded-full">
            1
          </button>
          <button className="w-10 h-10 text-light-grey bg-dark-blue active:bg-orange active:text-white rounded-full">
            2
          </button>
          <button className="w-10 h-10 text-light-grey bg-dark-blue active:bg-orange active:text-white rounded-full">
            3
          </button>
          <button className="w-10 h-10 text-light-grey bg-dark-blue active:bg-orange active:text-white rounded-full">
            4
          </button>
          <button className="w-10 h-10 text-light-grey bg-dark-blue active:bg-orange active:text-white rounded-full">
            5
          </button>
        </div>
        <button className="w-full min-h-[2.5rem] tracking-widest text-sm text-white bg-orange rounded-full uppercase active:bg-white active:text-orange">
          Submit
        </button>
      </div>
    </div>
  )
}

export default RatingCard
