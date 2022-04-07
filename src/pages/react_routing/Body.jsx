import styles from "./pages/Profile/components/ProfileCard.module.css";
export default function Body(props) {
  console.log(props.dataPribadi.map((item) => item.title));
  console.log(props.dataPribadi.map((item) => item.completed));

  return (
    <div>
      {props.dataPribadi.map((item) => (
        <h1
          className={styles.card}
          style={item.completed ? { textDecoration: "line-through" } : {}}
        >
          {item.id}
          {item.title}
        </h1>
      ))}
    </div>
  );
}
