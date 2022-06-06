import "./Form.css";
import { useState } from "react";

function Form(props) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addBooks([title, author, isbn]);
  }

  return (
    <form className="mb-3 text-start px-3" onSubmit={handleSubmit}>
      <label htmlFor="title-input" className="form-label fw-bold">
        Title
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="title-input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>

      <label htmlFor="author-input" className="form-label fw-bold">
        Author
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="author-input"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      ></input>

      <label htmlFor="isbn-input" className="form-label fw-bold">
        ISBN#
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="isbn-input"
        onChange={(e) => setISBN(e.target.value)}
        value={isbn}
      ></input>
      <button className="btn btn-outline-secondary w-100" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
