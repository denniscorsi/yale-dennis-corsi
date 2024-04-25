import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Typography } from "@mui/material";
import Search from "./components/Search";
import Loading from "./components/Loading";
import Results from "./components/Results";

function App() {
  const [taskId, setTaskId] = useState(null);
  const [numRecords, setNumRecords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (taskId) setIsLoading(true);
  }, [taskId]);

  return (
    <>
      <Typography variant="h1">PubMed Search</Typography>
      <Search setTaskId={setTaskId} setNumRecords={setNumRecords} />
      <Loading isLoading={isLoading} taskId={taskId} numRecords={numRecords} />
      <Results />
    </>
  );
}

export default App;
