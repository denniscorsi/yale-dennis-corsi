import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Pmid from "./Pmid";
import PageControl from "./PageControl";

const Results = ({ isLoading, setIsLoading, taskId }) => {
  const [PmidComponents, setPmidComponents] = useState([]);
  const [pmids, setPmids] = useState([]);
  const [numPages, setNumPages] = useState();
  const [page, setPage] = useState(1);

  const checkTask = () => {
    fetch(`/fetch/${taskId}`)
      .then((res) => res.json())
      .then((task) => {
        if (task.status === "processing") {
          setTimeout(checkTask, 200);
        } else {
          setPmids(task.results.pmids);
          setNumPages(Math.ceil(task.results.pmids.length / 10));
          setIsLoading(false);
        }
      });
  };

  const createPmidComponents = () => {
    // Render 10 results per page
    const pmidSlice = pmids.slice((page - 1) * 10, page * 10);
    const Pmids = pmidSlice.map((pmid) => <Pmid pmid={pmid} key={pmid} />);
    setPmidComponents(Pmids);
  };

  useEffect(() => {
    checkTask();
  }, [taskId]);

  useEffect(() => {
    createPmidComponents();
  }, [page, pmids]);

  return (
    <>
      {!isLoading && (
        <Box id="results-container">
          <Typography variant="h5">RESULTS</Typography>
          {PmidComponents}
          <PageControl numPages={numPages} page={page} setPage={setPage} />
        </Box>
      )}
    </>
  );
};

export default Results;
