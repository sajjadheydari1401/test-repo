import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardSvg from "../assets/svg/bank-card-svg.svg";
import EdumeerLogo from "../assets/svg/edumeer-red-logo.svg";
import EdumeerSignature from "../assets/svg/edumeer-signature.svg";

interface EmailVerifyTemplateProps {
  recipientName: string;
}

const EmailVerifyTemplate = ({ recipientName }: EmailVerifyTemplateProps) => {
  return (
    <Container sx={{ p: "25px", bgcolor: "white" }}>
      <Image
        src={EdumeerLogo}
        alt="logo"
        width={134}
        height={34}
        style={{ marginBottom: "28px" }}
      />
      <Typography
        sx={{ color: "#393939", fontSize: 20, fontWeight: 400, mb: "35px" }}
      >
        Verify your email address to complete registration
      </Typography>

      <Typography
        sx={{ color: "#393939", fontSize: 16, fontWeight: 300, mb: "17px" }}
      >
        Hi {recipientName},
      </Typography>

      <Typography
        sx={{ color: "#393939", fontSize: 16, fontWeight: 300, mb: "35px" }}
      >
        Thanks for your interest in joining EduMeer! To complete your
        registration, we need you to verify your email address.
      </Typography>

      <Box textAlign="center">
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: "100px",
            height: "40px",
            width: "270px",
            fontSize: 16,
            fontWeight: 400,
            mb: "35px",
            textTransform: "none",
          }}
        >
          Verify Email
        </Button>
      </Box>

      <Typography sx={{ color: "#393939", fontSize: 16, fontWeight: 300 }}>
        This link will expire in 48 hours. For your security, please don’t share
        this link with anyone.
      </Typography>

      <Box sx={{ my: "24px", textAlign: "center" }}>
        <Image
          src={CardSvg}
          alt="Earn money with EduMeer Card"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Box sx={{ display: "flex", width: "100%", gap: "16px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ color: "#393939", fontSize: 16, fontWeight: 300 }}>
            With respect
          </Typography>
          <Typography sx={{ color: "#393939", fontSize: 16, fontWeight: 300 }}>
            EduMeer Team!
          </Typography>
        </Box>
        <Image
          src={EdumeerSignature}
          alt="signature"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
};

export default EmailVerifyTemplate;
