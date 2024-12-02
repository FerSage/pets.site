import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./pages/main";
import Profile from "./pages/profile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path={"/"} element={<Main/>}/>
        <Route path={"/profile"} element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
