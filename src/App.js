import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // local storage(state)
    this.state = {
      monsters: [],
    };
  }

  //life cycle methods
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // fetching the data
      .then((res) => res.json()) // converting promise to json file and it returns promise
      .then((users) =>
        this.setState(() => {
          return { monsters: users }; // users = [{}*10] updating state
        })
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h3>{monster.name}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
