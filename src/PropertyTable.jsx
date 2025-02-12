import React, { useEffect, useMemo } from "react";
import { useTable } from "react-table";
import Papa from "papaparse";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyTable = ({ file }) => {
  const [data, setData] = React.useState([]);

  // Parse the CSV file
  useEffect(() => {
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: (result) => {
          setData(result.data);
        },
      });
    }
  }, [file]);

  // Define the columns for the table based on the CSV data
  const columns = useMemo(
    () =>
      data.length > 0
        ? Object.keys(data[0]).map((key) => ({
            Header: key,
            accessor: key,
          }))
        : [],
    [data]
  );

  // Create table instance with react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Zillow Property Data</h2>

      {data.length > 0 ? (
        <table {...getTableProps()} className="table table-striped">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-muted">No data available. Please upload a file.</p>
      )}
    </div>
  );
};

export default PropertyTable;
