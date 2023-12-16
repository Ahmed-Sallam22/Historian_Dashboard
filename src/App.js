import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Levels from "./Components/Levels/Levels";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./Components/Context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import Students from "./Components/Students/Students";
import ProtectRoute from "./Components/ProtectRoute/ProtectRoute";
import Videos from "./Components/Videos/Videos";
import Exercises from "./Components/Exercises/Exercises";
import QuestionBank from "./Components/Question_bank/Question_bank";
let routers = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true,element: (
          <ProtectRoute>
            
            <Home />
          </ProtectRoute>
        ),
      },
      {
        path: "/Levels",
        element: (
          <ProtectRoute>
            
            <Levels />
          </ProtectRoute>
        ),
      },
      {
        path: "/Students",
        element: (
          <ProtectRoute>
            
            <Students />
          </ProtectRoute>
        ),
      },
      {
        path: "/Videos",
        element: (
          <ProtectRoute>
            <Videos/>
          </ProtectRoute>
        ),
      },
      {
        path: "/Exercises",
        element: (
          <ProtectRoute>
            <Exercises/>
          </ProtectRoute>
        ),
      },
      {
        path: "/QuestionBank",
        element: (
          <ProtectRoute>
            <QuestionBank/>
          </ProtectRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  let { setuserToken } = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      setuserToken();
    }
  }, []);

  return (
    <>
      <ToastContainer theme="colored" position="top-center" autoClose={1000} />
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
