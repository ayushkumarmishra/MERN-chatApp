import "./App.css";
import { Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import home from "./Pages/homePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={home} exact />
      <Route path="/chat" component={ChatPage} />
    </div>
  );
}

export default App;
