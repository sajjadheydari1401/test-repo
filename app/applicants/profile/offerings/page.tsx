import { Box, Typography, Grid, Container } from "@mui/material";
import React from "react";
import OfferCard from "../OfferCard";
import tagIcon from "../../../assets/svg/tag-icon.svg";
import plusIcon from "../../../assets/svg/plus-icon.svg";
import sampleImg from "../../../assets/svg/sample-person.svg";
import Image from "next/image";
import BackButton from "@/app/components/BackButton";

const offers = [
  {
    title: "Apple MacBook Air Laptop with M2 Chip",
    price: "983.00",
    location: "Germany | Heidelberg",
    image: sampleImg,
  },
  {
    title: "Creative Thinking: Techniques and Tools for Success",
    price: "983.00",
    location: "Germany | Heidelberg",
    image: sampleImg,
  },
  {
    title: "Apple MacBook Air Laptop with M2 Chip",
    price: "",
    location: "Germany | Heidelberg",
    image: sampleImg,
    isFree: true,
  },
  {
    title: "Apple MacBook Air Laptop with M2 Chip",
    price: "983.00",
    location: "Germany | Heidelberg",
    image: sampleImg,
  },
  {
    title: "Python for Data Science, AI & Development",
    price: "983.00",
    location: "Germany | Heidelberg",
    image: sampleImg,
  },
  {
    title: "Apple MacBook Air Laptop with M2 Chip",
    price: "983.00",
    location: "Germany | Heidelberg",
    image: sampleImg,
  },
  {
    title: "Creative Thinking: Techniques and Tools for Success",
    price: "",
    location: "Germany | Heidelberg",
    image: sampleImg,
    isFree: true,
  },
];

const ApplicantOfferings = () => {
  return (
    <Container
      sx={{
        maxWidth: "1090px",
        mt: { md: "24px" },
        padding: { xs: "16px", md: 0 },
      }}
    >
      <BackButton sx={{ mb: "24px" }} />
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          padding: "24px 16px",
          borderRadius: "16px",
          mb: "42px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{
                fontWeight: 400,
                fontSize: { xs: 16, sm: 20 },
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#393939",
              }}
            >
              <Image src={tagIcon} alt="t" width={24} height={24} />
              Offering Things/Services
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: 14, sm: 16 },
              color: "#393939",
            }}
          >
            3
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: 300, fontSize: 14, color: "#7B7B7B", mt: "11px" }}
        >
          Tip: Present your university’s academic programs to a global audience
          and enhance your institution’s international presence.
        </Typography>
      </Box>

      <Grid container columnSpacing={2} rowSpacing={3}>
        <Grid
          size={{ xs: 12, sm: 6, md: 3 }}
          sx={{ height: "307px", display: "flex", flexDirection: "column" }}
        >
          <Box
            border="1.5px dashed #7B7B7B"
            borderRadius={"20px"}
            height="100%"
            display="flex"
            gap={"13px"}
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer", minHeight: "307px" }}
          >
            <Image src={plusIcon} alt="plus" width={36} height={36} />
            <Typography
              sx={{ fontSize: 16, color: "#6D6D6D", fontWeight: 400 }}
            >
              Add New
            </Typography>
          </Box>
        </Grid>
        {/* Offer Cards */}
        {offers.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              height: "307px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <OfferCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ApplicantOfferings;
