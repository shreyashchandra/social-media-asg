import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Signin } from "./pages/Signin.tsx";
import Onboard from "./pages/Onboard.tsx";
import Menu from "./pages/Menu.tsx";
import { Friends } from "./pages/Friends.tsx";
import { Message } from "./pages/Message.tsx";
import { Profile } from "./pages/Profile.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Onboard />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notification" element={<div>Notification</div>} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/messages" element={<Message />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
