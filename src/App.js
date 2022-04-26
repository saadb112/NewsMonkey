import News from "./components/news"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
function App() {
  return (
    // SETUP ROUTER DOM 
    <Router>
      <div className="App">

        <Routes>
        <Route exact path="/" element = {<News key="general" pageSize = {6} country = "in" category = "general"/>}/>.
          <Route exact path="/entertainment" element = {<News key="entertainment" pageSize = {6} country = "in" category = "entertainment"/>}/>
          <Route exact path="/health" element = {<News key="health" pageSize = {6} country = "in" category = "health"/>}/>
          <Route exact path="/science" element = {<News key="science" pageSize = {6} country = "in" category = "science"/>}/>
          <Route exact path="/sports" element = {<News key="sports" pageSize = {6} country = "in" category = "sports"/>}/>
          <Route exact path="/technology" element = {<News key="technology" pageSize = {6} country = "in" category = "technology"/>}/>
          <Route exact path="/business" element = {<News key="business" pageSize = {6} country = "in" category = "business"/>}/>

          
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
