"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import letterSvg from "../../assets/svg/letter-svg.svg";
import Image from "next/image";
import React from "react";

const ApplicantEmailVerification = () => {
  const handleResend = () => {
    alert("Verification email resent!");
  };

  return (
    <Container sx={{ textAlign: "center", mt: "117px", maxWidth: "562px" }}>
      <Box sx={{ mb: "50px" }}>
        <Image
          src={letterSvg}
          alt="Email icon"
          style={{ width: 148, height: 148 }}
        />
      </Box>

      <Typography
        sx={{ color: "#393939", fontWeight: 500, fontSize: 20, mb: "16px" }}
      >
        Verify Your Email to Continue
      </Typography>

      <Typography
        sx={{ color: "#7B7B7B", fontWeight: 300, fontSize: 16, mb: "32px" }}
      >
        We have sent an email to{" "}
        <span style={{ fontWeight: 400 }}>sajjad@gmail.com</span>.
        <br />
        Please check your inbox and click the link provided to verify your email
        address.
      </Typography>

      <Typography
        sx={{ color: "#7B7B7B", fontWeight: 300, fontSize: 16, mb: "8px" }}
      >
        If you didn’t receive the email, click the button below to resend it.
      </Typography>

      <Button
        variant="text"
        sx={{ color: "#C30707", fontWeight: 400, fontSize: 16 }}
        onClick={handleResend}
      >
        Resend Email
      </Button>
    </Container>
  );
};

export default ApplicantEmailVerification;
