import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBookTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/all-books')
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setAllBooks(data)

    })
  },[])

  const handleDelete = (id)=> {
    fetch(`http://localhost:5000/book/${id}`,{
      method:'delete'
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
    })
  }
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allBooks.map(book =><tr key={book._id}>
              <th scope="row">{book.bookName}</th>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <button onClick={() =>handleDelete(book._id)}>Delete</button>
                <Link to={`/admin/dashboard/edit-books/${book._id}`}>Update</Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
