import "./Table.css";
import TableItem from '../table-item/TableItem';

function Table() {
  return (
    <table className="w-100">
      <thead className="w-100 pb-3">
        <tr className="row w-100 text-center pb-2">
          <th className="col-sm-3">Title</th>
          <th className="col-sm-3">Author</th>
          <th className="col-sm-6">ISBN</th>
        </tr>
      </thead>
      <tbody>
          <TableItem />
      </tbody>
    </table>
  );
}

export default Table;
