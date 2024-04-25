import { Typography, CircularProgress } from "@mui/material";

const Loading = ({ isLoading, taskId, numRecords }) => {
  return (
    <>
      {taskId && <Typography>Task Id: {taskId}</Typography>}
      {numRecords && <Typography>Number of records: {numRecords}</Typography>}
      {isLoading && <CircularProgress />}
    </>
  );
};

export default Loading;
