
import React from "react";
import {  Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Dashboard from "./Components/Pages/Dashboard";
import Layout from "./Components/Layout";
import "./App.css"; 
function App() {
  return (
     <>
      {/* <Layout> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
            />
             </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;


