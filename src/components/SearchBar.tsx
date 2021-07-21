import InputBase from "@material-ui/core/InputBase";
import React from "react";
import { SearchBarType } from "../dto/SearchBarType";



const SearchBar = ({ value, onChange }: SearchBarType) => {
  return <InputBase
    placeholder="Search"
    type={"search"}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    inputProps={{ "aria-label": "search" }}
  />;
};
export default SearchBar;
