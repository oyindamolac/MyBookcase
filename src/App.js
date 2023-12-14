import React, { useState } from "react";
import data from "./models/books.json";
import { BookList } from "./components/book_list/BookList";
import Header from "./components/header/header";
import search from "./components/search/search";

/*function ParentComponent(props) {
  return (
    <div>
      <p>This is a paragraph</p>
      {props.children}
    </div>
  )
}
function ChildComponent() {
  return <h1>I am a child component</h1>
}
export function AnyComponent() {
  return(
    <ParentComponent>
      <ChildComponent />
      <p>This is a paragraph</p>
      <a href="">Click me</a>
    </ParentComponent>
  )
}
function GenericButton(props) {
  return <button style={props.style}>{props.children}</button>;
}
export function PrimaryButton(props) {
  return (
    <GenericButton
      style={{
        backgroundColor: "blue",
        color: "white"
      }}
    >
      {props.children}
    </GenericButton>
  )
}
export function DangerButton(props) {
  return (
    <GenericButton style={{ backgroundColor: "red", color: "white" }}>
      {props.children}
    </GenericButton>
  )
}
export function DisabledButton(props) {
  return(
    <GenericButton style={{ backgroundColor: "gray", color: "black" }}>
      {props.children}
    </GenericButton>
  )
}
*/
function App() {
   const [books, setBooks] = useState(data.books);
   const [keyword, setKeyword]= useState("");

   const addBook = () => {
    console.log("here");
    //create a new book
   const newBook = {
     id: 10,
   volumeInfo: {
    title: "Badass Habits",
    authors: ["Jen Sincero"],
    publisher: "Random House Digital, Inc.",
    publishedDate: "2005-11-12",
    description: "Cultivate the awareness, boundaries and daily upgrades you need to make stick"
 },
   price: 16.90
 }
      //update books state using setBooks
     setBooks(prevBooks => [...prevBooks, newBook]);
 }

 const findBooks  =  async (value ) => {
    const answers = await
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`)
    .then(response => response.json());

     if (!answers.error) {
    setBooks(answers.items);
    }
  }
  return (
      <React.Fragment>
        <Header />
        <search searchValue={keyword} setSearchValue={setKeyword} searchBooks={findBooks} />
        <BookList books={books} addBookEventHandler={() => addBook()} />
        <footer>
          <p>&copy: Copyright, 2023</p>
        </footer>
      </React.Fragment>
  )
  }




  export default App;
       