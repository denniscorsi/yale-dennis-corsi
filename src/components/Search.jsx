import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiFilledInput-root": {
    backgroundColor: "lightgray"
  },
  "& label.Mui-focused": {
    backgroundColor: "lightgray"
  }
});

const Search = ({ setTaskId, setNumRecords }) => {
  const onSubmit = () => {
    const query = document.getElementById("query").value;
    fetch(`/search/?term=${query}`)
      .then((res) => res.json())
      .then((task) => {
        console.log(task);
        setTaskId(task.task_id);
        setNumRecords(task.records);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom={3}
      width="50%"
      margin="0px auto"
    >
      <CustomTextField id="query" label="query" variant="filled" />
      <Button onClick={onSubmit} variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default Search;
