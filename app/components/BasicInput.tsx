import { TextField, TextFieldProps } from "@mui/material";

const BasicInput = (props: TextFieldProps) => (
  <TextField
    fullWidth
    inputProps={{
      style: {
        color: "#7B7B7B",
        paddingTop: 6,
      },
    }}
    {...props}
    sx={{
      borderRadius: "100px",
      border: "1px solid #C1C1C1",
      fontWeight: 300,
      fontSize: 12,
      height: "40px",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
        },
        borderRadius: "100px",
        "& input::placeholder": {
          color: "#8E8E8E",
          opacity: 1,
          fontWeight: 300,
          fontSize: 12,
        },
      },
      ...props.sx,
    }}
  />
);

export default BasicInput;
