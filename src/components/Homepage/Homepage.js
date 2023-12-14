import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import Pagination from './Pagination';
import search from '../search/search';
const HomePage = () => {
  const [books, setBooks] = useState([]); // Assuming you get books from an API or elsewhere
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => 
 {
      
  }, []); 

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Welcome to the Bookstore</h1>
      <BookList books={currentBooks} />
      <Pagination currentPage={currentPage} totalPages={Math.ceil(books.length / booksPerPage)} onPageChange={handlePageChange} />
    </div>
  );
};






export default HomePage;