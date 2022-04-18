import { Component } from "react";
import CardList from "./components/card-List/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // local storage(state)
    this.state = {
      monsters: [],
      searchFeild: "",
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

  onSearchHandler = (e) => {
    e.preventDefault();
    const searchFeild = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchFeild };
    });
  };
  render() {
    const { monsters, searchFeild } = this.state;
    const { onSearchHandler } = this; // destructuring
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFeild);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchHandler}
          placeholder="search monsters"
          className="monsters__search-box"
        />
        <CardList monsters={filteredArray} />
      </div>
    );
  }
}

export default App;
