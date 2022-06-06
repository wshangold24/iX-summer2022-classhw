import "./TableItem.css";

function TableItem(props) {

  return (
    <tr className="table-item row w-100 text-center mx-auto py-3 fw-normal">
      <th className="col-3">{props.book.title}</th>
      <th className="col-3">{props.book.author}</th>
      <th className="col-6">{props.book.isbn}</th>
    </tr>
  );
}

export default TableItem;
