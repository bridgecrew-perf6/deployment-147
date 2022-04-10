import Listitem from "./Listitem";

const ListPassenger = (props) => {
  const { data, hapusPengunjung } = props;

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
          {data.map((passenger) => (
            <Listitem
              key={passenger.id}
              item={passenger}
              hapusPengunjung={hapusPengunjung}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
