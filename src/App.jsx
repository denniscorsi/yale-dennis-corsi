import { useState } from "react";
import "./App.css";
import { Typography } from "@mui/material";
import Search from "./components/Search";
import Loading from "./components/Loading";
import Results from "./components/Results";

function App() {
  const [taskId, setTaskId] = useState(null);
  const [numRecords, setNumRecords] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Typography variant="h1">PubMed Search</Typography>
      <Search setIsLoading={setIsLoading} setTaskId={setTaskId} setNumRecords={setNumRecords} />
      <Loading isLoading={isLoading} taskId={taskId} numRecords={numRecords} />
      {taskId && <Results isLoading={isLoading} setIsLoading={setIsLoading} taskId={taskId} />}
    </>
  );
}

export default App;
