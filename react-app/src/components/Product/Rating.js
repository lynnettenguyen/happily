import star from '../CSS/Images/filled-star.svg'
import unFilledStar from '../CSS/Images/empty-star.svg'
import halfStar from '../CSS/Images/half-star.svg'

export const oneStar = [star, unFilledStar, unFilledStar, unFilledStar, unFilledStar]
export const oneHalfStar = [star, halfStar, unFilledStar, unFilledStar, unFilledStar]
export const twoStar = [star, star, unFilledStar, unFilledStar, unFilledStar]
export const twoHalfStar = [star, star, halfStar, unFilledStar, unFilledStar]
export const threeStar = [star, star, star, unFilledStar, unFilledStar]
export const threeHalfStar = [star, star, star, halfStar, unFilledStar]
export const fourStar = [star, star, star, star, unFilledStar]
export const fourHalfStar = [star, star, star, star, halfStar]
export const fiveStar = [star, star, star, star, star]

export const stars = (starCount) => {
  return (
    <>
      {starCount.map((star) => {
        return (
          <>
            <img src={star}></img>
          </>
        )
      })}
    </>
  )
}
