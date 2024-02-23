import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContanier from "./components/MainContanier";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContanier />
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
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
