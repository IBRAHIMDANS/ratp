import React, { PropsWithChildren, useEffect, useState } from "react";
import { getAll } from "../services/RatpServices";
import { useQuery } from "react-query";
import { SearchBar } from "./index";
import {
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TablePaginationProps,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import { TableHeaderType } from "../dto/TableHeaderType";
import { TablePaginationActionsCustom } from "./TablePaginationActionCustom";

const Root = styled.div`
  padding: 2em;
  margin-top: 2em;
`;

const tableHeader: TableHeaderType[] = [
  {
    label: "Libellé",
    align: "inherit",
    data:  "fields?.tco_libelle",
  },
  {
    label: "Adresse",
    align: "right",
    data:  "fields?.dea_numero_rue_livraison_dea_rue_livraison",
  },
  {
    label: "Ville",
    align: "right",
    data:  "fields?.ville",
  },
  {
    label: "Code postal",
    align: "right",
    data:  "fields?.code_postal",
  },
];

const RatpTable = () => {
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [apiPage, setApiPage] = useState<number>(0);
  const [apiRow, setApiRow] = useState<number>(100);

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const {
    refetch,
    data,
    isLoading,
  } = useQuery("GetCommerceRatpAPI", () => getAll({
    query: search,
    rowsPerPage: apiRow,
    page: apiPage,
  }));
  useEffect(() => {
    if (search || apiPage || apiRow) {
      refetch();
    }
  }, [search, apiPage, refetch, apiRow]);
  return (
    <Root>
      <Grid container direction={"column"}>
        <SearchBar
          value={search}
          onChange={(e: string) => setSearch(e)}
        />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeader?.map(item =>
                  <TableCell align={item?.align}>{item?.label}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading &&
              <Grid container alignItems={"center"}>
                <CircularProgress/>
              </Grid>
              }
              {data && data?.length === 0 && <Paper> Pas de données 🤧 </Paper>}
              {(rowsPerPage > 0
                  ?
                  data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data
              )?.map((row, key) => (
                <TableRow key={row?.fields?.recordid}>
                  {/*<TableCell*/}
                  {/*  component="th"*/}
                  {/*  scope="row"*/}
                  {/*>{row?.fields?.tco_libelle}</TableCell>*/}
                  {tableHeader?.map(item => {


                    console.log(tableHeader, "tableHeader")
                    console.log(row, "row")
                    return <TableCell align={item?.align}>{row[`${item.data}`]}</TableCell>;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, { value: -1, label: "All" }]}
              component="div"
              count={data?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              colSpan={3}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              SelectProps={{
                inputProps: { "aria-label": "nombre d'element par page" },
                native: true,
              }}
              ActionsComponent={(defaultProps: PropsWithChildren<TablePaginationProps>) =>
                <TablePaginationActionsCustom
                  {...defaultProps}
                  apiPage={apiPage}
                  apiRow={apiRow}
                  onChangeApiPage={(e) => setApiPage(e)}
                  onChangeApiRow={(e) => setApiRow(e)}
                />}
            />
          </TableRow>
        </TableFooter>
      </Grid>
    </Root>
  );
};

export default RatpTable;
