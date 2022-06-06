import { useEffect, useMemo, useState } from "react";
import React from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";

function App() {
  let books = [{}];
  const [book, setBook] = useState({
    title: "harry potter",
    author: "jk rowling",
    isbn: "1234567890",
  });

  function getBook(title, author, isbn) {
    //Source: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    setBook(
      Object.assign(this.book, { title: title, author: author, isbn: isbn })
    );
    books.push({
      title: title,
      author: author,
      isbn: isbn,
    });

    console.log("book", this.book);
    return [this.book];
  }

  return (
    <div className="App w-50 mx-auto mt-5 p-5">
      <h1>Add Book:</h1>
      {/* <Form book={book} getBook={getBook}/> */}
      <Form book={book} sendBook={getBook} />
      <Table book={book} books={books} />
    </div>
  );
}

export default App;
