import React from "react";
import Bookshelf from "./Bookshelf";

const BookList = () => {
  return (
    <div className='list-books-content'>
      <div>
        <Bookshelf />
        <Bookshelf />
        <Bookshelf />
      </div>
    </div>
  );
};

export default BookList;
