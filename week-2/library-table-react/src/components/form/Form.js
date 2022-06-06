import "./Form.css";

function Form(props) {

    let title = props.book.title;
    let author = props.book.author;
    let isbn = props.book.isbn;


    function handleSubmit(event) {
        event.preventDefault();
        props.sendBook(title, author, isbn);
        // console.log("title", title);
        // console.log("author", author);
        // console.log("isbn", isbn);
    }

    function onTitleChange(event) {
        title = event.target.value;
        
    }

    function onAuthorChange(event) {
        author = event.target.value;
        
    }

    function onISBNChange(event) {
        isbn = event.target.value;
        
    }

    function handleSubmitInput(event) {
        event.target.value = "";
    }




  return (
    <form className="mb-3 text-start px-3" onSubmit={handleSubmit}>
      <label htmlFor="title-input" className="form-label fw-bold">
        Title
      </label>
      <input type="text" className="form-control mb-3" id="title-input" onChange={onTitleChange}></input>

      <label htmlFor="author-input" className="form-label fw-bold">
        Author
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="author-input"
        onChange={onAuthorChange}
      ></input>

      <label htmlFor="isbn-input" className="form-label fw-bold">
        ISBN#
      </label>
      <input type="text" className="form-control mb-3" id="isbn-input" onChange={onISBNChange}></input>
      <button className="btn btn-outline-secondary w-100" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
