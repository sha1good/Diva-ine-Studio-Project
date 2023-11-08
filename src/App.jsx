
import "./app.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
import List from "./pages/list/List"
import Home from "./pages/Home";
import Photography from "./pages/photography/Photography";
import PodCast from "./pages/podcast/Podcast";
import PodCastList from "./pages/podcastList/PodCastList";

const App = () => {
  return (
    <div>
      <Cursor />
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home page="home"/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/photography/:id" element={<Photography/>}/>
        <Route path="/podcastList" element={<PodCastList/>}/>
        <Route path="/podcast/:id" element={<PodCast/>}/>
       </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
