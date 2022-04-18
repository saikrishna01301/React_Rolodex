import { Component } from "react";

class CardContainer extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div key={id} className="card-container">
        <img
          alt={name}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    );
  }
}
export default CardContainer;
