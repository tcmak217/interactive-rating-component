import React, { useState } from "react"
import Rating from "../components/RatingCard/RatingCard"

function PageRating() {
  const [rating, setRating] = useState<number | null>(null)

  const handleSetRating = (rating: number) => {
    setRating(rating)
  }

  return (
    <>
      <div className="w-full h-screen bg-very-dark-blue flex justify-center items-center">
        <Rating rating={rating} handleSetRating={handleSetRating}></Rating>
      </div>
    </>
  )
}

export default PageRating
