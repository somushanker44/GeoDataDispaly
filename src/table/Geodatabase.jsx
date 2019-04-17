import React from "react";
import ReactTable from "react-table";

import "react-table/react-table.css";

const columns = displayMap => [
  {
    width: 80,
    Header: "Object Id",
    id: "id",
    accessor: "id",
    Cell: row =>
      row.original.table_name === "wCurbStopValve" ? (
        <a className="stopvalve">{row.original.id}</a>
      ) : (
        <a className="wSystemValve">{row.original.id}</a>
      )
  },
  {
    width: 120,
    Header: "Location Description",
    id: "description",
    accessor: "description"
  },
  {
    width: 120,
    Header: "Point X",
    id: "longitude",
    accessor: "longitude"
  },
  {
    width: 120,
    Header: "Point Y",
    id: "latitude",
    accessor: "latitude"
  },
  {
    width: 80,
    Header: "Map Link",
    id: "map",
    Cell: row => (
      <button
        type="button"
        onClick={() =>
          displayMap(row.original["latitude"], row.original["latitude"])
        }
      >
        Show
      </button>
    )
  }
];

export default props => (
  <ReactTable
    data={props.data}
    defaultSorted={[
      {
        id: "id",
        desc: false
      }
    ]}
    heading="Household Members"
    filterable
    columns={columns(props.displayMap)}
    defaultPageSize={10}
  />
);
