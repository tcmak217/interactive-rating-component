import React, { useState } from "react"
import Rating from "../components/RatingCard/RatingCard"
import ThanksCard from "../components/ThanksCard/ThanksCard"

function PageRating() {
  const [rating, setRating] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSetRating = (rating: number) => {
    setRating(rating)
  }

  const handleSetIsSubmitted = (isSubmitted: boolean) => {
    setIsSubmitted(isSubmitted)
  }

  return (
    <>
      <div className="w-full h-screen bg-very-dark-blue flex justify-center items-center">
        {!isSubmitted ? (
          <Rating
            rating={rating}
            handleSetRating={handleSetRating}
            handleSetIsSubmitted={handleSetIsSubmitted}
          ></Rating>
        ) : (
          <ThanksCard rating={rating}></ThanksCard>
        )}
      </div>
    </>
  )
}

export default PageRating
