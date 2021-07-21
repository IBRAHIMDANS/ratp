import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { CustomNumberTextFieldType } from "../dto";

export const CustomNumberTextField = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: CustomNumberTextFieldType) => <Grid item>
  <TextField
    helperText={label}
    value={value}
    type={"number"}
    onChange={onChange}
    InputProps={{
      inputProps: {
        min, max, shrink: "true",
      },
    }}
  />
</Grid>;
