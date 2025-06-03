"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import BasicInput from "../../components/BasicInput";
import BasicSelect from "../../components/BasicSelect";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import GoogleSvg from "../../assets/svg/google-icon.svg";
import FacebookSvg from "../../assets/svg/social-facebook.svg";

const ApplicantRegister = () => {
  const [registrationType, setRegistrationType] = useState("applicant");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      registrationType,
      email,
      username,
      country,
      city,
      language,
      password,
      accepted,
    });
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: { xs: "100%", lg: "70%" },
        maxWidth: "1090px",
        p: 0,
        mt: "50px",
      }}
    >
      <Grid container spacing={"72px"}>
        {/* Left Column: Form */}
        <Grid size={{ xs: 12, md: 8 }} sx={{ px: { xs: "16px" } }}>
          {/* Registration Type and Form */}
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "26px",
              }}
            >
              <Typography
                sx={{ color: "#393939", fontSize: 18, fontWeight: 300 }}
              >
                Registration Type
              </Typography>
              <RadioGroup
                row
                value={registrationType}
                sx={{
                  height: "40px",
                  width: "100%",
                  display: "flex",
                  p: 0,
                  gap: "8px",
                  mb: { xs: "16px", md: "53px" },
                }}
                onChange={(e) => setRegistrationType(e.target.value)}
              >
                <FormControlLabel
                  value="applicant"
                  control={
                    <Radio
                      color="error"
                      sx={{
                        pl: "16px",
                      }}
                    />
                  }
                  label="Applicant"
                  sx={{
                    background: "white",
                    flexGrow: 1,
                    height: "100%",
                    borderRadius: "100px",
                    border: "1px solid #C1C1C1",
                    color: "#7B7B7B",
                    m: 0,
                  }}
                />
                <FormControlLabel
                  value="business"
                  control={
                    <Radio
                      color="error"
                      sx={{
                        pl: "16px",
                      }}
                    />
                  }
                  label="Business"
                  sx={{
                    background: "white",
                    flexGrow: 1,
                    height: "100%",
                    borderRadius: "100px",
                    border: "1px solid #C1C1C1",
                    color: "#7B7B7B",
                    m: 0,
                  }}
                />
              </RadioGroup>
              {/* Tips for small screens */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  gap: "5px",
                  mb: { xs: "34px", md: 0 },
                }}
              >
                <Typography sx={{ color: "#393939" }}>Tips:</Typography>
                <Typography sx={{ color: "#393939", fontWeight: 300 }}>
                  Invite your friends to install EduMeer Application and get 100
                  Coins for each successful installation!
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "24px",
                py: { xs: "32px", md: "56px" },
                px: { xs: 2, sm: 4, md: "40px" },
              }}
            >
              {/* Social Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 2,
                  justifyContent: "center",
                  height: { xs: "auto", md: "40px" },
                }}
              >
                <Button
                  startIcon={
                    <Image
                      src={GoogleSvg}
                      alt="Google"
                      width={24}
                      height={24}
                    />
                  }
                  variant="outlined"
                  sx={{
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    height: "100%",
                    borderRadius: "100px",
                    border: "1px solid #C1C1C1",
                    color: "#7B7B7B",
                    textTransform: "none",
                  }}
                >
                  Continue with Google
                </Button>
                <Button
                  startIcon={
                    <Image
                      src={FacebookSvg}
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  }
                  variant="outlined"
                  sx={{
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    height: "100%",
                    borderRadius: "100px",
                    border: "1px solid #C1C1C1",
                    textTransform: "none",
                    color: "#7B7B7B",
                  }}
                >
                  Continue with Facebook
                </Button>
              </Box>

              {/* Divider */}
              <Divider color="#E3E3E3" sx={{ my: "48px" }}>
                <Typography
                  sx={{ color: "#A8A8A8", fontWeight: 300, fontSize: 14 }}
                >
                  or
                </Typography>
              </Divider>

              {/* Form Fields */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <BasicInput
                    label=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <BasicInput
                    label=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <BasicSelect
                    label="Country"
                    value={country}
                    onChange={(e) =>
                      setCountry((e.target as HTMLInputElement).value)
                    }
                  >
                    <MenuItem value="">
                      <span
                        style={{
                          color: "#8E8E8E",
                          fontWeight: 300,
                          fontSize: 12,
                        }}
                      >
                        Country
                      </span>
                    </MenuItem>
                    <MenuItem value="us">United States</MenuItem>
                    <MenuItem value="uk">United Kingdom</MenuItem>
                  </BasicSelect>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <BasicInput
                    label=""
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <BasicSelect
                    label="Data Entry Language"
                    value={language}
                    onChange={(e) =>
                      setLanguage((e.target as HTMLInputElement).value)
                    }
                  >
                    <MenuItem value="">
                      <span
                        style={{
                          color: "#8E8E8E",
                          fontWeight: 300,
                          fontSize: 12,
                        }}
                      >
                        Data Entry Language
                      </span>
                    </MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                  </BasicSelect>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <BasicInput
                    label=""
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password (8 characters or more)"
                  />
                </Grid>
              </Grid>

              {/* Checkbox */}
              <Box mt={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={
                        <CheckCircleIcon sx={{ color: "#C30707" }} />
                      }
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: 14, color: "#7B7B7B" }}>
                      Accept{" "}
                      <span style={{ color: "#C30707", fontWeight: 500 }}>
                        register rule and privacy
                      </span>
                    </Typography>
                  }
                />
              </Box>

              {/* Submit Button */}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: "20px",
                  backgroundColor: "#C30707",
                  color: "white",
                  borderRadius: "100px",
                  height: "40px",
                  fontSize: 16,
                  fontWeight: 400,
                  textTransform: "none",
                }}
                type="submit"
              >
                Register
              </Button>
            </Box>
          </form>
        </Grid>
        {/* Right Column: Tips */}
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            pt: { md: "50px" },
            display: { xs: "none", md: "flex" },
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Typography sx={{ color: "#393939" }}>Tips:</Typography>
            <Typography sx={{ color: "#393939", fontWeight: 300 }}>
              Invite your friends to install EduMeer Application and get 100
              Coins for each successful installation!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApplicantRegister;
