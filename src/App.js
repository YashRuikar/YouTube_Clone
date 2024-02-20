import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./components/utils/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>

    // Head
    // Body
    // Sidebar
    //    MainItems
    // MainContainer
    //    ButtonList
    //    VideoContainer
    //    VideoCard
  );
}

export default App;
