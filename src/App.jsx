// import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Record from "./pages/Record";
import Records from "./pages/Records";
import Template from "./pages/Template";
import Templates from "./pages/Templates";
import Stats from "./pages/Stats";
import SetupDebug from "./pages/SetupDebug";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Records />} />
        <Route path="records" element={<Records />} />
        <Route path="records/:recordId" element={<Record />} />
        <Route path="templates" element={<Templates />} />
        <Route path="templates/:templateId" element={<Template />} />
        <Route path="stats" element={<Stats />} />
        <Route path="setupDebug" element={<SetupDebug />} />
      </Route>
    )
  );

  return (
    <div className="ui grid">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
