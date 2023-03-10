import React from "react"
import startIcon from "../../images/icon-star.svg"

function RatingCard({
  rating,
  handleSetRating,
  handleSetIsSubmitted,
}: {
  rating: number | null
  handleSetRating: (rating: number) => void
  handleSetIsSubmitted: (isSubmitted: boolean) => void
}) {
  return (
    <div className="bg-[hsl(215,20%,15%)] w-[320px] h-[360px] rounded-3xl">
      <div className="w-full h-full flex flex-col p-8 gap-4">
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-dark-blue flex justify-center items-center">
            <img className="w-3 h-3" src={startIcon} alt="star icon" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold">How did we do?</div>
        </div>
        <div className="flex items-center">
          <div className="text-light-grey text-sm">
            Please let us know how we did with your support request. All feedback is appreciated to
            help us improve our offering!
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <button
            className={`w-10 h-10 text-light-grey bg-dark-blue hover:bg-orange hover:text-white rounded-full ${
              rating === 1 ? "bg-light-grey text-white" : ""
            }`}
            onClick={() => {
              handleSetRating(1)
            }}
          >
            1
          </button>
          <button
            className={`w-10 h-10 text-light-grey bg-dark-blue hover:bg-orange hover:text-white rounded-full ${
              rating === 2 ? "bg-light-grey text-white" : ""
            }`}
            onClick={() => {
              handleSetRating(2)
            }}
          >
            2
          </button>
          <button
            className={`w-10 h-10 text-light-grey bg-dark-blue hover:bg-orange hover:text-white rounded-full ${
              rating === 3 ? "bg-light-grey text-white" : ""
            }`}
            onClick={() => {
              handleSetRating(3)
            }}
          >
            3
          </button>
          <button
            className={`w-10 h-10 text-light-grey bg-dark-blue hover:bg-orange hover:text-white rounded-full ${
              rating === 4 ? "bg-light-grey text-white" : ""
            }`}
            onClick={() => {
              handleSetRating(4)
            }}
          >
            4
          </button>
          <button
            className={`w-10 h-10 text-light-grey bg-dark-blue hover:bg-orange hover:text-white rounded-full ${
              rating === 5 ? "bg-light-grey text-white" : ""
            }`}
            onClick={() => {
              handleSetRating(5)
            }}
          >
            5
          </button>
        </div>
        <button
          className="w-full min-h-[2.5rem] tracking-widest text-sm text-white bg-orange rounded-full uppercase hover:bg-white hover:text-orange"
          onClick={() => {
            handleSetIsSubmitted(true)
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default RatingCard
