import { Box, TextField, Button, Typography } from "@mui/material";

const Search = () => {
  const onSubmit = () => {
    const query = document.getElementById("query").value;
    fetch(`/search/?term=${query}`)
      .then((res) => res.json())
      .then((task) => console.log(task));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      paddingBottom={3}
      width="40%"
      margin="0px auto"
    >
      <TextField id="query" label="query" variant="standard" />
      <Button onClick={onSubmit} variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default Search;
