import React from "react";
import DateService from "../services/DateService";

const Td = ({ item, columns }) => {
  return (
    <>
      {columns.map((column, index) => (
        <td key={index}>
          {column.type === "datetime"
            ? DateService.dateFormat(item[column.name])
            : item[column.name]}
        </td>
      ))}
    </>
  );
};

export default Td;
