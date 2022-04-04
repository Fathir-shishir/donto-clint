import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const{comment,rating,picture,name} = review
    // console.log(review)
    return (
        <div className='review-container'>
        <div className='reviewer-info'>
            <img   src={picture} alt="" />
            <h1>{name}</h1>
        </div>
        <div className='review-details'>

        </div>
            <p>Rating : {rating}</p>
            <p className=''>Comment :  {comment }</p>
        </div>
    );
};

export default Review;