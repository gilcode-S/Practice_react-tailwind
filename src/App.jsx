import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Details from "./pages/Details";
import NextPage from "./pages/NextPage";
import ClassPage from "./pages/ClassPage";
import StatsPage from "./pages/StatsPage";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      {" "}
      <Header />
      <Home />
      <Details />
      <NextPage/>
      <ClassPage/>
      <StatsPage/>
      <Footer/>
    </>
  );
};

export default App;
