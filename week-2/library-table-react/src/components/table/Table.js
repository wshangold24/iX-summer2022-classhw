import "./Table.css";

function Table(props) {
  return (
    <table className="w-100">
      <thead className="w-100 pb-3">
        <tr className="row w-100 text-center pb-2 d-flex">
          <th className="col-3">Title</th>
          <th className="col-3">Author</th>
          <th className="col-6">ISBN</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((b, i) => {
          return <tr className="row w-100 text-center py-2" key={i}>
            <td className="col-3">{b[0]}</td>
            <td className="col-3">{b[1]}</td>
            <td className="col-6">{b[2]}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}

export default Table;
