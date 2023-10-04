import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  console.log(book)
  const {authorName,bookName,imageUrl,categoryName,metaTextDescription,bookPDF,_id} = book
  // const {name, disegniton, location,imageUrl, _id} = book
  return (
    <div class="col">
      <div class="card h-100">
        <img
          src={imageUrl}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{bookName}</h5>
          <p class="card-text">
            {metaTextDescription}
          </p>
          <p>{authorName}</p>
        </div>
        <div class="card-footer">
        <Link to={`details/${_id}`} className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
