"use client";

import { Avatar, Box, IconButton } from "@mui/material";
import editIcon from "../assets/svg/edit-icon.svg";
import Image from "next/image";
import { useRef, useState } from "react";

const AvatarSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
      display="inline-block"
      sx={{
        mt: { xs: "-117px", sm: "-117px" },
        ml: { xs: "20px", sm: "38px" },
      }}
    >
      <Avatar
        alt="Avatar"
        src={selectedImage || "/default-avatar.png"}
        sx={{
          width: { xs: 96, sm: 183 },
          height: { xs: 96, sm: 183 },
          border: "5px solid white",
          boxShadow: "0px 0px 24px 0px #00000029;",
        }}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <IconButton
        sx={{
          position: "absolute",
          bottom: "13px",
          right: "7px",
          width: { xs: 28, sm: 40 },
          height: { xs: 28, sm: 40 },
          backgroundColor: "white",
          border: "1px solid #C1C1C1",
          ":hover": {
            bgcolor: "white",
          },
        }}
        onClick={handleButtonClick}
      >
        <Image src={editIcon} alt="edit" />
      </IconButton>
    </Box>
  );
};

export default AvatarSection;
