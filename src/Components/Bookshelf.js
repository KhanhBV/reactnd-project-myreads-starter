import React from "react";
import Book from "./Book";

const Bookshelf = (props) => {
  const { shelf, bookList, selectShelf } = props;

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelf.title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {bookList.map((book) => (
            <li key={book.id}>
              <Book book={book} shelf={shelf} selectShelf = {selectShelf}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
