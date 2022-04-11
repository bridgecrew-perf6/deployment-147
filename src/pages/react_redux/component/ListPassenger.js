import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { hapusPengunjung } from "../store/passengerSlice";

const ListPassenger = (props) => {
  //cara pengambilan data dari passengerSlice.
  const passengers = useSelector((state) => state.passenger.passengers);
  const defaultPass = useSelector((state) => state);
  console.log("didalam defaultPass = ", defaultPass);
  const dispatch = useDispatch();

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <td>Checklist</td>
          <td>Pekerjaan</td>
          <td>ID</td>
          <td>Action</td>
        </thead>
        <tbody>
          {passengers.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              hapusPengunjung={() => {
                dispatch(hapusPengunjung(item.id));
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
