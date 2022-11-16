import logo from "./assets/travis.svg";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header logo={logo} />
      <Profile username="tylermcginnis" />
    </>
  );
}

export default App;
