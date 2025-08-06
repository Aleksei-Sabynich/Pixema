import { Route, Routes } from "react-router-dom";
import { Layout } from "../pages/layout/Layout";
import { Posts } from "../pages/posts/Posts";
import { PostById } from "../pages/postById/PostById";
import { Favorites } from "../pages/favorites/Favorites";
import { Trends } from "../pages/trends/Trends";
import { ApprovedPage } from "../pages/approvedPage/ApprovedPage";
import { SuccesAuthorized } from "../pages/succesAuthorized/SuccesAuthorized";
import { Sorting } from "../pages/sorting/Sorting";
import { LoginForm } from "../components/loginForm/LoginForm";

export  function AppRoutes() {
  return (

        <Routes>
            <Route path="/" element={< Layout/>} >
              <Route index  element={< Posts/>} />
              <Route path="/:postId" element={< PostById/>} />
              <Route path="/trends" element={< Trends/>} />
              <Route path="/favorites" element={< Favorites/>} />
              <Route path="/sorting" element={< Sorting/>} />
              <Route path="/succesAuthorized" element={< SuccesAuthorized/>} />
              <Route path="/approved" element={<ApprovedPage />} />
              <Route path="/singin" element={<LoginForm/>} />
            </Route>
        </Routes>
  )
}