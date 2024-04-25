import { Typography, CircularProgress, Box } from "@mui/material";

const Loading = ({ isLoading, taskId, numRecords }) => {
  return (
    <>
      {taskId && (
        <Typography>
          <strong>Task Id:</strong> {taskId}
        </Typography>
      )}
      {numRecords && (
        <Typography>
          <strong>Number of records:</strong> {numRecords}
        </Typography>
      )}
      {isLoading && (
        <Box padding={4}>
          {" "}
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Loading;
