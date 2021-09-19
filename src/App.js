import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Article></Article>
      <Mobile></Mobile>
      <Blog heading="Paramoy lifeer parasitamol" author="Jhanker Mahbub"></Blog>
      <Blog heading="Paradoxical Shazid" author="Arif Azad"></Blog>
      <Blog heading="Question & Answer" author="Abdullah Jahangir"></Blog>
      <LoadTodo></LoadTodo>
    </div>
  );
}
function LoadTodo() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h2>Load Comments</h2>
      {comments.map((comment) => (
        <User name={comment.name} body={comment.body}></User>
      ))}
    </div>
  );
}
function User(props) {
  return (
    <div className="blog">
      <h3>Name: {props.name} </h3>
      <p>Body: {props.body} </p>
    </div>
  );
}
function Mobile() {
  const [charge, setCharge] = useState(100);
  const HandleBatteryDown = () => {
    const newCharge = charge - 10;
    if (newCharge < 0) {
      return;
    }
    setCharge(newCharge);
  };
  return (
    <div>
      <h1>Charge: {charge}%</h1>
      <button onClick={HandleBatteryDown}>Battery Down</button>
    </div>
  );
}

function Blog(props) {
  return (
    <div className="blog">
      <h2>Heading: {props.heading} </h2>
      <h5>Author: {props.author} </h5>
    </div>
  );
}

function Article() {
  const headerStyle = {
    color: "cyan",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "24px",
  };
  return (
    <div>
      <article className="blog">
        <h2 style={headerStyle}>Hello React!!</h2>
        <h4>I am hear</h4>
        <p style={{ color: "orange", fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusamus, nam a atque, laudantium illum optio voluptates porro eveniet
          perferendis quam deserunt temporibus provident veritatis harum assumenda! Blanditiis, cupiditate facere.
        </p>
      </article>
    </div>
  );
}

export default App;
