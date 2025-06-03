import { Container, Box, Typography } from "@mui/material";
import verifiedEmail from "../../assets/svg/letter-checked.svg";
import Image from "next/image";
import React from "react";

const ApplicantEmailVerified = () => {
  return (
    <Container sx={{ textAlign: "center", mt: "117px", maxWidth: "562px" }}>
      <Box sx={{ mb: "50px" }}>
        <Image
          src={verifiedEmail}
          alt="Email checked"
          style={{ width: 148, height: 148 }}
        />
      </Box>

      <Typography
        sx={{ color: "#6D6D6D", fontWeight: 300, fontSize: 16, mb: "16px" }}
      >
        Thank you for verifying your email and being a part of Edumeer
      </Typography>

      <Typography sx={{ color: "#393939", fontWeight: 500, fontSize: 24 }}>
        Congratulations! Your account is verified.Redirecting...
      </Typography>
    </Container>
  );
};

export default ApplicantEmailVerified;
