import Book from "./../book/Book";
import React ,{useState}from "react";

export function BookList({ books, addBookEventHandler }) {
 if(books.length === 0) {
        return <h1>No books</h1>;
    }

    return(
        <div>
            {books.map(i => <Book key={i.id} bookProps={i} />)}
            <h3>{books.title}</h3>
            <p>{books.author}</p>
            <h3>{books.desciption}</h3>
            <button onClick={() => addBookEventHandler()}>Add New Book</button>
        </div>
    )
};


   

export default BookList;
    

