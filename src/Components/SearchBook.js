import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search, update } from "../Services/BooksAPI";
import Book from "./Book";

const SearchBook = () => {
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

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link
          className='close-search'
          to='/'
          >
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
            ? searchBooks.map((book) => (
                <Book
                  book={book}
                  selectShelf={selectShelf}
                />
              ))
            : ''}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
