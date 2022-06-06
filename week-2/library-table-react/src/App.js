import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Table from "./components/table/Table";

function App() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  function getBook(title, author, isbn) {
    setBook({ title: this.title, author: this.author, isbn: this.isbn });
    console.log("book", book);
    // console.log("title", title);
    // console.log("author", author);
    // console.log("isbn", isbn);
  }

  return (
    <div className="App w-50 mx-auto mt-5 p-5">
      <h1>Add Book:</h1>
      {/* <Form book={book} getBook={getBook}/> */}
      <Form book={book} sendBook={getBook} />
      <Table />
    </div>
  );
}

export default App;
