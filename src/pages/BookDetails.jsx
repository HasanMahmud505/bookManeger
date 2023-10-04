import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams()
  const [detailData, setDetailData] = useState({})
  console.log(detailData)
  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setDetailData(data)
      })
  }, [])
  return <div>
    <img src={detailData.imageUrl} alt="" />
    <div class="">
      <h5 class="">{detailData.bookName}</h5>
      <p class="">{detailData.metaTextDescription}</p>
    </div>
    <iframe
    title="Pdf file viewer"
    width='50%'
    height="600px"
    src={detailData.bookPdfUrl}
    />
  </div>
};

export default BookDetails;
