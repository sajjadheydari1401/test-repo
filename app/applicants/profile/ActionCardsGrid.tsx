"use client";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import searchIcon from "../../assets/svg/search-icon.svg";
import tagIcon from "../../assets/svg/tag-icon.svg";
import letterIcon from "../../assets/svg/gray-letter.svg";
import grayStar from "../../assets/svg/gray-star.svg";
import InfoCard from "./InfoCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ActionCardsGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter();

  const handleOfferingsClick = () => {
    router.push("/applicants/profile/offerings");
  };

  return (
    <Box sx={{ mt: { xs: "12px", sm: "34px" }, px: { xs: "16px", sm: 0 } }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoCard
            title="Looking for something"
            message="Tips: Invite your friends to install EduMeer Application and get 100 Coins for each successful installation!"
            icon={
              <Image
                src={searchIcon}
                alt="s"
                width={isMobile ? 20 : 24}
                height={isMobile ? 20 : 24}
              />
            }
            count={10}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoCard
            message="Tips: Invite your friends to install EduMeer Application and get 100 Coins for each successful installation!"
            title="Offering Things/Services"
            icon={
              <Image
                src={tagIcon}
                alt="t"
                width={isMobile ? 20 : 24}
                height={isMobile ? 20 : 24}
              />
            }
            count={5}
            onClick={handleOfferingsClick}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoCard
            title="My Requests"
            message="Tips: Invite your friends to install EduMeer Application and get 100 Coins for each successful installation!"
            icon={
              <Image
                src={letterIcon}
                alt="l"
                width={isMobile ? 20 : 24}
                height={isMobile ? 20 : 24}
              />
            }
            count={0}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <InfoCard
            title="My Reviews"
            message="Tips: Invite your friends to install EduMeer Application and get 100 Coins for each successful installation!"
            icon={
              <Image
                src={grayStar}
                alt="st"
                width={isMobile ? 20 : 24}
                height={isMobile ? 20 : 24}
              />
            }
            count={6}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActionCardsGrid;
