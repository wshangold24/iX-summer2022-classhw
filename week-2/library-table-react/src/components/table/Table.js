import "./Table.css";
import TableItem from "../table-item/TableItem";
import Form from "../form/Form";
import { useState } from "react";

function Table(props) {

  return (
    <table className="w-100">
      <thead className="w-100 pb-3">
        <tr className="row w-100 text-center pb-2" key="1">
          <th className="col-3">Title</th>
          <th className="col-3">Author</th>
          <th className="col-6">ISBN</th>
        </tr>
      </thead>
      <tbody>
        <TableItem book={props.book} />
      </tbody>
    </table>
  );
}

export default Table;
