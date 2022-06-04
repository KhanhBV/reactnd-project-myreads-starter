import React from 'react';
import ShelfSelelect from './ShelfSelelect';

const Book = (props) => {
  const { book, selectShelf } = props;
  const { imageLinks, title, authors } = book;
  
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: imageLinks ? `url(${imageLinks.thumbnail})` : '',
          }}
        />
        <div className='book-shelf-changer'>
          <ShelfSelelect book={book} selectShelf={selectShelf} />
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>
        { 
        authors && authors.length > 0
        ? authors.join(', ')
        : ''
      }
      </div>
    </div>
  );
};

export default Book;
