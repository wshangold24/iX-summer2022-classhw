import { useEffect, useMemo, useState } from "react";
import React from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";

// Helpful source for connecting table and form: https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd

function App() {
  const [books, setBooks] = useState([
    {
      title: "harry potter",
      author: "jk rowling",
      isbn: "1234567890",
    },
  ]);

  const addBook = (book) => {
    let items = [...books, book];
    setBooks(items);
  };
  useEffect(() => {
    console.log("props", books);
  }, [books.at(books.length - 1)]);

  return (
    <div className="App w-50 mx-auto mt-5 p-5">
      <h1>Add Book:</h1>
      <Form addBooks={addBook} />
      <Table books={books} />
    </div>
  );
}

export default App;
