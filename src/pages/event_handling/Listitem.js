// import React, { useState } from "react";

import { Button } from "react-bootstrap";

const Listitem = ({ item, hapusPengunjung, markTodo, markUser }) => {
  return (
    <tr style={item.completed ? { textDecoration: "line-through" } : {}}>
      <td>
        <Button
          variant="outline-success"
          onClick={() => markTodo(item.markUser)}
        >
          ✓
        </Button>
      </td>
      <td>{item.title}</td>
      {/* <td>{item.title}</td> */}
      <td>{item.id}</td>
      <td>
        <Button
          variant="outline-danger"
          onClick={() => {
            hapusPengunjung(item.id);
          }}
        >
          ✕
        </Button>
      </td>
    </tr>
  );
};

export default Listitem;
