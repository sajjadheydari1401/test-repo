"use client";

import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import defaultCover from "../assets/default-cover.jpg";
import editIcon from "../assets/svg/edit-icon.svg";

const CoverImage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only PNG, JPG, or JPEG files are allowed.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setSelectedImage(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box
      position="relative"
      width="100%"
      height={isMobile ? 90 : 276}
      sx={{ backgroundColor: "white", borderRadius: isTablet ? 0 : "16px" }}
    >
      <Image
        src={selectedImage || defaultCover}
        alt="Cover"
        fill
        style={{ objectFit: "cover", borderRadius: isTablet ? 0 : "16px" }}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button
        variant="contained"
        startIcon={
          <Image
            src={editIcon}
            alt="edit"
            width={isMobile ? 20 : 24}
            height={isMobile ? 20 : 24}
          />
        }
        sx={{
          width: { xs: "auto", sm: 221 },
          height: { xs: 28, sm: 40 },
          position: "absolute",
          bottom: 20,
          right: 23,
          borderRadius: "100px",
          bgcolor: "white",
          fontSize: { xs: 12, sm: 16 },
          fontWeight: 400,
          color: "#393939",
          textTransform: "none",
          boxShadow: "none",
        }}
        onClick={handleButtonClick}
      >
        Change Profile Cover
      </Button>
    </Box>
  );
};

export default CoverImage;
