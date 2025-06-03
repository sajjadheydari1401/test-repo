import { FormControl, InputLabel, Select, SelectProps } from "@mui/material";
import React from "react";

const BasicSelect = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ label, children, ...props }, ref) => (
    <FormControl fullWidth sx={{ height: "40px" }}>
      {label && (
        <InputLabel
          sx={{
            color: "#8E8E8E",
            fontWeight: 300,
            fontSize: 12,
            top: -6,
            left: 10,
          }}
        />
      )}
      <Select
        {...props}
        label={label}
        ref={ref}
        displayEmpty
        sx={{
          borderRadius: "100px",
          border: "1px solid #C1C1C1",
          fontWeight: 300,
          fontSize: 12,
          height: "40px",
          background: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSelect-select": {
            color: "#7B7B7B",
            padding: "8px 14px",
            fontWeight: 300,
            fontSize: 12,
          },
          "& .MuiSelect-icon": {
            color: "#8E8E8E",
          },
          ...props.sx,
        }}
        inputProps={{
          ...props.inputProps,
          sx: {
            color: "#7B7B7B",
            fontWeight: 300,
            fontSize: 12,
            ...props.inputProps?.sx,
          },
        }}
        renderValue={(selected) => {
          if (!selected) {
            return (
              <span style={{ color: "#8E8E8E", fontWeight: 300, fontSize: 12 }}>
                {" "}
                {label}{" "}
              </span>
            );
          }
          return (
            (children &&
              React.Children.toArray(children).find(
                (child: any) => child.props.value === selected
              )?.props.children) ||
            selected
          );
        }}
      >
        {children}
      </Select>
    </FormControl>
  )
);

BasicSelect.displayName = "BasicSelect";

export default BasicSelect;
