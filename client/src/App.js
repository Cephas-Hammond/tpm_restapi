import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");

  // const displayInfo = () => {
  //   console.log(name + email + age + dob)
  // }

  const [studentlist, setStudentlist] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/api/v1/students/mysql", {
      name: name,
      email: email,
      age: age,
      dob: dob,
    }).then(() => {
      setStudentlist([
        ...studentlist,
        {
          name: name,
          email: email,
          age: age,
          dob: dob,
        },
      ]);
    });
  };

  const getStudents = () => {
    Axios.get("http://localhost:3001/api/v1/students/psql").then((response) => {
      setStudentlist(response.data);
    });
  };

  return (
    <div className="App">
      <div className="ui menu">
        <a className="item"> Electoral Commission</a>
        <a className="item">Birth and Death</a>
        <a className="item">DVLA</a>
        <a className="item">National Health Insurance</a>
      </div>

      <div className="ui cards">
        <a className="ui card" href={getStudents}>
          <div className="content">
            <div className="header"> Electoral Commission</div>
            {/* <div class="meta">All Data</div> */}

            <div className="description">PostgreSQL</div>
            <button className="ui green basic button" onClick={getStudents}>
              Access
            </button>
          </div>
        </a>
        <a className="ui card" href="#card-example-link-card">
          <div className="content">
            <div className="header">Birth and Death</div>
            {/* <div className="meta">Musicians</div> */}
            <div className="description">MySQL</div>
            <button className="ui green basic button" onClick={getStudents}>
              Access
            </button>
          </div>
        </a>
        <a className="ui card" href="#card-example-link-card">
          <div className="content">
            <div className="header">DVLA</div>
            {/* <div className="meta">Friend</div> */}
            <div className="description">Mariadb</div>
            <button className="ui green basic button" onClick={getStudents}>
              Access
            </button>
          </div>
        </a>
        <a className="ui card" href="#card-example-link-card">
          <div className="content">
            <div className="header">National Health Insurance</div>
            {/* <div className="meta">Friend</div> */}
            <div className="description">SQLite</div>
            <button className="ui green basic button" onClick={getStudents}>
              Access
            </button>
          </div>
        </a>
      </div>

      <div className="students">
        <button className="ui button" onClick={getStudents}>
          Show Students
        </button>

        {studentlist.map((val, key) => {
          return (
            <div className="student">
              <h3>Name: {val.name}</h3>
              <h3>Email: {val.email}</h3>
              <h3>Age: {val.age}</h3>
              <h3>Dob: {val.dob}</h3>
            </div>
          );
        })}
      </div>
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Dob:</label>
        <input
          type="date"
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
        <button className="ui button" onClick={addUser}>
          Add User
        </button>
        <div className="separate"></div>
      </div>
    </div>
  );
}

export default App;
