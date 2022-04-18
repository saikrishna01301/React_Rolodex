import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${props.className}`}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
