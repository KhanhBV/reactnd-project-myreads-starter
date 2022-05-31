import React, { useEffect, useState } from 'react';
import { getAll, update } from '../Services/BooksAPI';
import Bookshelf from './Bookshelf';

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const shelfList = [
    {
      id: 'currentlyReading',
      title: 'Currently Reading',
    },
    {
      id: 'wantToRead',
      title: 'Want to Read',
    },
    {
      id: 'read',
      title: 'Read',
    },
  ];

  const fetchAllBooks = () => {
    getAll().then((books) => {
      setBookList(books);
    });
  };

  const filterBookByShelf = (shelf) => {
    return bookList.filter((book) => book.shelf === shelf.id);
  };

  const selectShelf = (book, shelf) => {
    update(book, shelf).then((response) => {
      fetchAllBooks();
    });
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className='list-books-content'>
      <div>
        {shelfList.map((shelf) => (
          <Bookshelf
            key={shelf.id}
            bookList={filterBookByShelf(shelf)}
            shelf={shelf}
            selectShelf={selectShelf}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
