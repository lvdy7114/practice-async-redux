import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div className="App" style={themeColor}>
      <NavBar />
      <Profile />
      <Login />
    </div>
  );
}

export default App;
