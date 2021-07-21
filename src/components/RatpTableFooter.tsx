import { TableFooter, TablePagination, TableRow } from "@material-ui/core";
import React from "react";
import { RatpTableFooterType } from "../types";

export const RatpTableFooter = ({
  commerces,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
  actionsComponent,
}: RatpTableFooterType) => {
  return <TableFooter>
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, { value: -1, label: "All" }]}
        component="div"
        count={commerces?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        colSpan={3}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        SelectProps={{
          inputProps: { "aria-label": "nombre d'element par page" },
          native: true,
        }}
        ActionsComponent={actionsComponent}
      />
    </TableRow>
  </TableFooter>;
};
