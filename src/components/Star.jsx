import { AiOutlineStar } from "react-icons/ai"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import styled from "styled-components"

// eslint-disable-next-line react/prop-types
function Star({ reviews, stars }) {
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
      let number = index + 0.5
  
      return (
        <span key={index}>
          {stars >= index + 1 ? (
            <FaStar className="icon" />
          ) : stars >= number ? (
            <FaStarHalfAlt className="icon" />
          ) : (
            <AiOutlineStar className="icon" />
          )}
        </span>
      )
    })
  
    return (
      <Wrapper>
        <div className="icon-style">
          {ratingStars}
          <p>{reviews} Customer Reviews</p>
        </div>
      </Wrapper>
    )
  }
  
  const Wrapper = styled.section`
    .icon-style {
      display: flex;
      gap: 0.2rem;
      align-items: center;
      justify-content: flex-start;
      .icon {
        font-size: 2rem;
        color: orange;
      }
      .empty-icon {
        font-size: 2.6rem;
      }
      p {
        margin: 0;
        padding-left: 1.2rem;
      }
    }
  `
  
  export default Star;