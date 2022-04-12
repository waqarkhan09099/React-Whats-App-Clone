import "./App.css";
import SideBar from "./Components/SideBar";
import ChatSection from "./Components/ChatSection";

function App() {


  return (
    <div className="App">
      <div className="app-body">
        <SideBar></SideBar>
        <ChatSection></ChatSection>
      </div>
    </div>
  );
}

export default App;
