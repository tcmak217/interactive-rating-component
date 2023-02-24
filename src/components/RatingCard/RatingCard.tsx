import React from "react"

function RatingCard() {
  return (
    <div className="bg-dark-blue max-w-[320px] w-[90%] h-[400px] rounded-3xl">
      <div className="text-white">How did we do?</div>
      <div className="text-light-grey">
        Please let us know how we did with your support request.All feedback is appreciated to help
        us improve our offering!
      </div>
      <div className="text-light-grey">1 2 3 4 5</div>
      <div className="text-white">Submit</div>
    </div>
  )
}

export default RatingCard
