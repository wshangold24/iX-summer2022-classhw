import "./Form.css";

function Form() {
  return (
    <form className="mb-3 text-start px-3">
      <label htmlFor="title-input" className="form-label fw-bold">
        Title
      </label>
      <input type="text" className="form-control mb-3" id="title-input"></input>

      <label htmlFor="author-input" className="form-label fw-bold">
        Author
      </label>
      <input type="text" className="form-control mb-3" id="author-input"></input>

      <label htmlFor="isbn-input" className="form-label fw-bold">
        ISBN#
      </label>
      <input type="text" className="form-control mb-3" id="isbn-input"></input>
    </form>
  );
}

export default Form;
