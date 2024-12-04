import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import Profile from "./pages/profile";
import New from "./pages/new";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Search from "./pages/search";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
        <Route path={"/add-post"} element={<New/>}/>
        <Route path={"/search"} element={<Search/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
