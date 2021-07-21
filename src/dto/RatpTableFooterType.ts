import { ChangeEventHandler } from "react";

export type RatpTableFooterType = {
  commerces: any[],
  rowsPerPage: number,
  page: number,
  onPageChange: (_: any, newPage: any) => void,
  onRowsPerPageChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  actionsComponent: (commerce) => JSX.Element,
}
