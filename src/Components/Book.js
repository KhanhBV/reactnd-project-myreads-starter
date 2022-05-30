import React from "react";
import ShelfSelelect from "./ShelfSelelect";

const Book = (props) => {
  const { book, selectShelf, shelf } = props;
  const { imageLinks, title, authors } = book;

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imageLinks.thumbnail})`,
          }}
        />
        <div className='book-shelf-changer'>
          <ShelfSelelect shelf={shelf} book={book} selectShelf={selectShelf} />
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>
        {authors.map((author, index) =>
          authors.length - 1 === index ? author : `${author}, `
        )}
      </div>
    </div>
  );
};

export default Book;
