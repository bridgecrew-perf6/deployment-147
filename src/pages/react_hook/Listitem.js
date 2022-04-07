// import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Listitem = ({ item, hapusPengunjung, toogleItemStatus, index }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={() => toogleItemStatus()}
          defaultChecked={item.completed}
        />
      </td>
      <td
        style={{
          textDecoration: item.completed ? "line-through" : "",
        }}
      >
        {item.title}
      </td>
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
