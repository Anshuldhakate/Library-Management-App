import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css"; // Add styling

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} className="book-image" />
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Description:</strong> {book.details}</p>
    </div>
  );
};

export default BookDetails;
