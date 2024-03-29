import InputBase from "@material-ui/core/InputBase";
import React from "react";
import { SearchBarType } from "../types";


export const SearchBar = ({ value, onChange }: SearchBarType) => {
  return <InputBase
    placeholder="Search"
    type={"search"}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    inputProps={{ "aria-label": "search" }}
  />;
};
