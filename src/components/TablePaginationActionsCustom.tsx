import { Box, Grid, IconButton, useTheme } from "@material-ui/core";
import LastPageIcon from "@material-ui/icons/LastPage";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import React from "react";
import { CustomNumberTextField } from "./CustomNumberTextField";
import { TablePaginationActionsCustomType } from "../dto";


export const TablePaginationActionsCustom = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  apiPage,
  apiRow,
  onChangeApiRow,
  onChangeApiPage,
}: TablePaginationActionsCustomType) => {
  const theme = useTheme();

  const handleFirstPageButtonClick = (event) => onPageChange(event, 0);

  const handleBackButtonClick = (event) => onPageChange(event, page - 1);

  const handleNextButtonClick = (event) => onPageChange(event, page + 1);

  const handleLastPageButtonClick = (event) => onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  const endPage = page >= Math.ceil(count / rowsPerPage) - 1;

  return (
    <Box flexWrap="wrap" flexShrink={0} display={"flex"}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon/> : <FirstPageIcon/>}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowRight/> :
          <KeyboardArrowLeft/>}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft/> :
          <KeyboardArrowRight/>}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={endPage}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon/> : <LastPageIcon/>}
      </IconButton>

      <Grid item>
        <Grid container direction={"row"} spacing={2}>
          <CustomNumberTextField
            label={"API Element 🔥"}
            value={apiRow}
            min={10}
            max={1000}
            onChange={(e) => onChangeApiRow(Number(e.target.value))}
          />
          {
            endPage &&
            <CustomNumberTextField
              label={"API Page 🚀"}
              value={apiPage}
              min={0}
              max={100}
              onChange={(e) => onChangeApiPage(Number(e.target.value))}
            />
          }
        </Grid>
      </Grid>

    </Box>
  );
}

