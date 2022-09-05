import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Register from "./page/Register";
import DetailsPost from "./page/DetailsPost";
import GlobalContext from "./context/GlobalContext";
import UserList from "./page/UserList";
import AddPost from "./page/AddPost";
import Dashboard from "./page/Dashboard";
import EditPost from "./page/EditPost";
import ProtectedRoute from "./context/ProtectedRoute";
import IsLogin from "./context/IsLogin";

function App() {
  return (
    <BrowserRouter>
    <GlobalContext>
    <IsLogin />
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route exact path="/post/:id" element={<DetailsPost />} />
        <Route  path="/user" element={<UserList />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route element={<ProtectedRoute/>} >
          
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route exact path="/post/edit/:id" element={<EditPost />} />
      </Routes>
    </GlobalContext>
    </BrowserRouter>

  );
}

export default App;
