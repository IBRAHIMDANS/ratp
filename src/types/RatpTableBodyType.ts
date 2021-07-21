export type RatpTableBodyType = {
  loading: boolean,
  commerces: any[],
  rowsPerPage: number,
  page: number,
  element: (commerce, key) => JSX.Element
}
