import { CircularProgress, Grid, Paper, TableBody } from "@material-ui/core";
import React from "react";
import { RatpTableBodyType } from "../dto";


export const RatpTableBody = ({
  loading,
  commerces,
  rowsPerPage,
  page,
  element,
}: RatpTableBodyType) => {
  return <TableBody>
    {loading &&
    <Grid container alignItems={"center"}>
      <CircularProgress/>
    </Grid>
    }
    {commerces?.length === 0 &&
    <Paper> Pas de données 🤧 </Paper>}
    {(
      rowsPerPage > 0 ?
        commerces?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
        commerces
    )?.map(element)}
  </TableBody>;
};
