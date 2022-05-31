import React from "react";

const ShelfSelelect = (props) => {
  const { book, selectShelf } = props;

  const handleSelectShelf = (e) => {
    const title = e.target.value;
      selectShelf(book, title);
  };

  return (
    <select defaultValue={book.shelf || 'none'} onChange={(e) => handleSelectShelf(e)}>
      <option value='move' disabled>
        Move to...
      </option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  );
};

export default ShelfSelelect;
