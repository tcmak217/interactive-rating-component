import React from "react"
import startIcon from "../../images/icon-star.svg"

function RatingCard() {
  return (
    <div className="bg-dark-blue max-w-[320px] w-[90%] h-[400px] rounded-3xl">
      <div className="w-full h-full flex flex-col p-8">
        <div className="grow">
          <img src={startIcon} alt="star icon" />
        </div>
        <div className="text-white grow">How did we do?</div>
        <div className="text-light-grey grow">
          Please let us know how we did with your support request.All feedback is appreciated to
          help us improve our offering!
        </div>
        <div className="text-light-grey grow">1 2 3 4 5</div>
        <div className="text-white grow">Submit</div>
      </div>
    </div>
  )
}

export default RatingCard
