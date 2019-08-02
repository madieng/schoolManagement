import React from "react";
import Td from "./Td";
import Th from "./Th";

const Table = ({ items, columns }) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <Th key={index} label={column.label} />
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <Td item={item} columns={columns} />
              <td className="text-center">
                <button type="button" className="btn btn-warning btn-sm mr-2">
                  Modifier
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
