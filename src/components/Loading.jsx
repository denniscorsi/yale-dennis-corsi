import { Typography, CircularProgress } from "@mui/material";

const Loading = ({ isLoading, taskId, numRecords }) => {
  return (
    <>
      <Typography>Task Id: {taskId}</Typography>
      <Typography>Number of records: {numRecords}</Typography>
      {isLoading && <CircularProgress />}
    </>
  );
};

export default Loading;
