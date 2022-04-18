import { Component } from "react";
import CardContainer from "./CardContainer";
import "./CardList.css";
import "./CardContainer.css";

class CardList extends Component {
  render() {
    // console.log(this.props);
    const { monsters } = this.props;
    // console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
