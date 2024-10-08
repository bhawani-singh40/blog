import { Route, Routes } from "react-router-dom";
import AddNewCategory from "./components/Categories/AddNewCategory";
import CategoryList from "./components/Categories/CategoryList";
import UpdateCategory from "./components/Categories/UpdateCategory";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";
import AdminRoute from "./components/Navigation/ProtectedRoutes/AdminRoute";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
import CreatePost from "./components/Posts/CreatePost";
import PostsList from "./components/Posts/PostsList";
import Login from "./components/Users/Login/Login";
import Register from "./components/Users/Register/Register";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/add-category" element={<AdminRoute><AddNewCategory/></AdminRoute>} />
      <Route exact path="/create-post" element={<PrivateProtectRoute><CreatePost/></PrivateProtectRoute>} />
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/posts" element={<PostsList />} />
      <Route exact path="/category-list" element={<CategoryList />} />
      <Route exact path="/update-category/:id" element={<UpdateCategory />} />
    </Routes>
    </>
  );
}

export default App;
