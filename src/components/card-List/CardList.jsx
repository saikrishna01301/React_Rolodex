import CardContainer from "./CardContainer";
import "./CardList.css";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardContainer monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
