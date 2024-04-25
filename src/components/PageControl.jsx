import { Box, TextField, Button, Typography } from "@mui/material";

const PageControl = ({ numPages, page, setPage }) => {
  const changePage = (direction) => {
    setPage(page + direction);
  };

  return (
    <>
      <h5>
        On page {page} of {numPages}
      </h5>
      <Box display="flex" justifyContent="space-around">
        <Button variant="outlined" disabled={!(page - 1)} onClick={() => changePage(-1)}>
          Previous Page
        </Button>
        <Button variant="outlined" onClick={() => changePage(1)}>
          Next Page
        </Button>
      </Box>
    </>
  );
};

export default PageControl;
