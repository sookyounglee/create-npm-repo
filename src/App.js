import { message } from "antd";
import { JumboButton } from "./components";
import { BadgeComp } from "./components";
import "./App.css";

function App() {
  const info = () => {
    message.info("This is a normal message");
  };

  return (
    <div className="App">
      <JumboButton backgroundColor="yellow" fontColor="black" onClick={info}>
        test버튼
      </JumboButton>
      <BadgeComp value={3} />
    </div>
  );
}

export default App;
