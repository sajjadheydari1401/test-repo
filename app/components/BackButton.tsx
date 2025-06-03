"use client";

import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Typography, SxProps, Theme } from "@mui/material";

interface BackButtonProps {
  sx?: SxProps<Theme>;
}

const BackButton = ({ sx }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: "fit-content",
        ...sx,
      }}
      onClick={() => router.back()}
    >
      <KeyboardBackspaceIcon sx={{ color: "#6D6D6D", fontSize: 20 }} />
      <Typography
        sx={{
          ml: 1,
          fontWeight: 400,
          color: "#6D6D6D",
          fontSize: 14,
        }}
      >
        Back
      </Typography>
    </Box>
  );
};

export default BackButton;
