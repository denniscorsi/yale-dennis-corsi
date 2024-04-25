import { useEffect, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import Pmid from "./Pmid";

const Results = ({ setIsLoading, taskId }) => {
  const [pmids, setPmids] = useState([]);

  const checkTask = () => {
    fetch(`/fetch/${taskId}`)
      .then((res) => res.json())
      .then((task) => {
        console.log(task);
        if (task.status === "processing") {
          setTimeout(checkTask, 200);
        } else {
          console.log("complete!");
          createPmidComponents(task.results.pmids);
          setIsLoading(false);
        }
      });
  };

  const createPmidComponents = (pmids) => {
    const Pmids = pmids.map((pmid) => <Pmid pmid={pmid} />);
    setPmids(Pmids);
  };

  useEffect(() => {
    checkTask();
  }, [taskId]);

  return (
    <Box id="results-container">
      <Typography variant="h5">Results</Typography>
      {pmids}
    </Box>
  );
};

export default Results;
