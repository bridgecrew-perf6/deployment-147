import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import React from "react";

const ListItem = ({ item, hapusPengunjung, markTodo }) => {
  const passengers = useSelector((state) => state.passenger.passengers);
  // console.log("didalam defaultPass = ", defaultPass);

  // const { id, title, completed } = props;

  console.log(passengers);
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onClick={() => markTodo(item.id)}
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
          onClick={() => hapusPengunjung(item.id)}
        >
          ✕
        </Button>
      </td>
    </tr>
  );
};

export default ListItem;
