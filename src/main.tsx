import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import {
  About,
  Contact,
  Home,
  LatestBlogs,
  Menswear,
  NewCollection,
  Sale,
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="newCollection" element={<NewCollection />} />
      <Route path="sale" element={<Sale />} />
      <Route path="menswear" element={<Menswear />} />
      <Route path="latestBlogs" element={<LatestBlogs />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
