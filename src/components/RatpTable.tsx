import React, { PropsWithChildren, useEffect, useState } from "react";
import { getAll } from "../services/RatpServices";
import { useQuery } from "react-query";
import {
  RatpTableBody,
  RatpTableFooter,
  RatpTablePaginationActionsCustom,
  SearchBar,
} from "./index";
import {
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePaginationProps,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";
import { CommercesType } from "../types";

const Root = styled.div`
  padding: 2em;
  margin-top: 2em;
`;

const CommercesArray: CommercesType[] = [
  {
    label: "Libellé",
    align: "inherit",
    data: "tco_libelle",
  },
  {
    label: "Adresse",
    align: "right",
    data: "dea_numero_rue_livraison_dea_rue_livraison",
  },
  {
    label: "Ville",
    align: "right",
    data: "ville",
  },
  {
    label: "Code postal",
    align: "right",
    data: "code_postal",
  },
];

export const RatpTable = () => {
  const [search, setSearch] = useState<string>("");
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
    data: commerces = [],
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
                {
                  CommercesArray?.map(item =>
                    <TableCell key={item.data} align={item?.align}>
                      {item?.label}
                    </TableCell>,
                  )
                }
              </TableRow>
            </TableHead>
            <RatpTableBody
              loading={isLoading}
              commerces={commerces}
              rowsPerPage={rowsPerPage}
              page={page}
              element={(commerce) => (
                <TableRow key={commerce?.fields?.recordid}>
                  {
                    CommercesArray?.map(item =>
                      <TableCell key={item.data} align={item?.align}>
                        {commerce.fields[`${item.data}`]}
                      </TableCell>,
                    )
                  }
                </TableRow>
              )}
            />
          </Table>
        </TableContainer>
        <RatpTableFooter
          commerces={commerces}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          actionsComponent={(defaultProps: PropsWithChildren<TablePaginationProps>) =>
            <RatpTablePaginationActionsCustom
              {...defaultProps}
              apiPage={apiPage}
              apiRow={apiRow}
              onChangeApiPage={(e) => setApiPage(e)}
              onChangeApiRow={(e) => setApiRow(e)}
            />}
        />
      </Grid>
    </Root>
  );
};

