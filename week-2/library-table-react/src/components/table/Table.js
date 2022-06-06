import "./Table.css";

function Table() {
  return (
    <table className="w-100">
      <thead className="w-100 pb-3">
        <tr className="row w-100 text-center pb-2">
          <th className="col-sm-3">Task</th>
          <th className="col-sm-3">Completed</th>
          <th className="col-sm-6">Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
}

export default Table;
