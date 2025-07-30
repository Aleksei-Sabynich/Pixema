import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../pages/layout/Layout";
import { Posts } from "../pages/posts/Posts";
import { PostById } from "../pages/postById/PostById";
import { Favorites } from "../pages/favorites/Favorites";
import { Trends } from "../pages/trends/Trends";
import { ApprovedPage } from "../pages/approvedPage/ApprovedPage";
import { SuccesAuthorized } from "../pages/succesAuthorized/SuccesAuthorized";

export  function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={< Layout/>} >
              <Route index  element={< Posts/>} />
              <Route path="/:postId" element={< PostById/>} />
              <Route path="/trends" element={< Trends/>} />
              <Route path="/favorites" element={< Favorites/>} />
              <Route path="/succesAuthorized" element={< SuccesAuthorized/>} />
              {/* <Route path="/settings" element={< Layout/>} /> */}
              <Route path="/approved" element={<ApprovedPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}