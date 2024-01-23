import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import PostArticle from "./pages/PostArticle";
import ViewArticle from "./pages/ViewArticle";

const MyRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route exact path="/" Component={Home} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/login" Component={Login} />
        <Route path="/post-article" Component={PostArticle} />
        <Route path="/view-article/:id" Component={ViewArticle} />
      </Routes>
    </>
  );
};

export default MyRoutes;
