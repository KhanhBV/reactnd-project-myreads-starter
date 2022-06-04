import React, { useEffect, useState, useCallback } from 'react';
import { getAll, update } from '../Services/BooksAPI';
import Bookshelf from './Bookshelf';

const BookList = () => {

  /**
   * @description This state to store the list of books
   */
  const [bookList, setBookList] = useState([]);

  /**
   * @description This variable to store the list of shelf
   */
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

  /**
   * @description This function is used to get the list of books from the server
   */
  const fetchAllBooks = () => {
    getAll().then((books) => {
      setBookList(books);
    });
  };

  /**
   * @description This function is used to filter books by bookshelf
   * @param {String} shelf - The name of bookshelf to filter
   */
  const filterBookByShelf = (shelf) => {
    return bookList.filter((book) => book.shelf === shelf.id);
  };

  /**
   * @description This function is used to handle select shelf book
   * @param {Object} book - The Book want to update shelfbook
   * @param {String} shelf - The name of bookshelf want to update
   */
  const selectShelf = useCallback((book, shelf) => {
    update(book, shelf).then(() => {
      fetchAllBooks();
    });
  }, []);

  /**
   * @description This function is used to get data when the component renders for the first time
   */
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
