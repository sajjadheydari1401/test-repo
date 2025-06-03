import AvatarSection from "@/app/components/AvatarImage";
import CoverImage from "@/app/components/CoverImage";
import { Container } from "@mui/material";
import React from "react";
import ActionCardsGrid from "./ActionCardsGrid";
import UserInfo from "./UserInfo";

const ApplicantProfile = () => {
  return (
    <Container
      style={{ padding: 0 }}
      sx={{
        maxWidth: "1090px",
        mt: { md: "32px" },
      }}
    >
      <CoverImage />
      <AvatarSection />
      <UserInfo />
      <ActionCardsGrid />
    </Container>
  );
};

export default ApplicantProfile;
