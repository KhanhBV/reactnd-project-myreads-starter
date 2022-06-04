import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll, search, update } from "../Services/BooksAPI";
import Book from "./Book";

const SearchBook = () => {
  const [bookList, setBookList] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  /**
   * 
   * @description This function is used to search book from server
   */
   const handleChangeSearch = (e) => {
    const query = e.target.value;
    search(query).then((books) => {
      setSearchBooks(books);
    });
  };

  /**
   *
   * @description This function is used to update shelfbook from server
   */
  const selectShelf = (book, shelf) => {
    update(book, shelf);
  };

  /**
   * @description This function is used to get the list of books from the server
   */
  const fetchAllBooks = () => {
    getAll().then((books) => {
      setBookList(books);
    });
  };

  const filterBook = (searchBook) => {
    for (let i = 0; i < bookList.length; i++) {
      const book = bookList[i];
      if (book.id === searchBook.id) {
        return book;
      }
    }
    return searchBook;
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>

        <div className='search-books-input-wrapper'>
          {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
          <input
            onChange={(e) => handleChangeSearch(e)}
            type='text'
            placeholder='Search by title or author'
          />
        </div>
      </div>

      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchBooks && searchBooks.length > 0
            ? searchBooks.map((searchBook) => (
                <Book
                  key={searchBook.id}
                  name = {filterBook(searchBook)}
                  book={bookList && bookList.length > 0 ? filterBook(searchBook) : searchBook}
                  selectShelf={selectShelf}
                />
              ))
            : ""}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
