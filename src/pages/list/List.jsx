import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import Contact from "../../components/contact/Contact";

const List = () => {
return (
    <div>
      <Navbar />
       <div className="listContainter">
        <div className="listWrapper">
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default List;
