import "./style.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="searchBox">
      <div className="shadow"></div>
      <input type="text" placeholder="Search Anything you want..."></input>
      <SearchIcon className="icon" />
    </div>
  );
};

export default SearchBar;
