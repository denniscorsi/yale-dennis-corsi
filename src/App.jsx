import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";
import Search from "./components/Search";
import Loading from "./components/Loading";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Typography variant="h1">PubMed Search</Typography>
      <Search />
      <Loading />
      <Results />
    </>
  );
}

export default App;
