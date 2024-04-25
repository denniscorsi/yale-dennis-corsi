import { Box, TextField, Button, Typography } from "@mui/material";

const PageControl = ({ numPages, page, setPage }) => {
  const changePage = (direction) => {
    setPage(page + direction);
  };

  return (
    <>
      <h3>Page Control</h3>
      <p>On Page: {page}</p>
      <p>Pages: {numPages}</p>
      <Button variant="outlined" disabled={!(page - 1)} onClick={() => changePage(-1)}>
        Previous Page
      </Button>
      <Button variant="outlined" onClick={() => changePage(1)}>
        Next Page
      </Button>
    </>
  );
};

export default PageControl;
