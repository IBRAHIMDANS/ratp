import {
  CircularProgress,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { RatpTableBodyType } from "../types";


export const RatpTableBody = ({
  loading,
  commerces,
  rowsPerPage,
  page,
  element,
}: RatpTableBodyType) => {
  return <TableBody>
    {loading &&
    <TableRow>
      <TableCell>
        <Grid container alignItems={"center"}>
          <CircularProgress/>
        </Grid>
      </TableCell>
    </TableRow>
    }
    {!loading && commerces?.length === 0 &&
    <TableRow>
      <TableCell>
        <Paper> Pas de données 🤧 </Paper>
      </TableCell>
    </TableRow>}

    {(
      rowsPerPage > 0 ?
        commerces?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
        commerces
    )?.map(element)}
  </TableBody>;
};
