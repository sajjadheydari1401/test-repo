import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BaseModal from "./BasicModal";
import coinImg from "../assets/svg/coin-reward.svg";
import rewardModalContent from "../assets/svg/reward-modal-content.svg";
import { useTheme, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface RewardModalProps {
  open: boolean;
  onClose: () => void;
}

const RewardModal: React.FC<RewardModalProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Congrats!"
      contentSx={{ px: "40px", py: "24px" }}
      CloseIconComponent={isMobile ? <CloseIcon /> : undefined}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        textAlign={{ xs: "center", sm: "left" }}
        gap={"16px"}
        sx={{ marginTop: "24px" }}
      >
        <Box
          sx={{
            width: { xs: 120, sm: 140 },
            height: { xs: 120, sm: 140 },
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src={coinImg}
            alt="coin"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: { xs: "center", sm: "self-start" },
          }}
        >
          <Image
            src={rewardModalContent}
            alt="content"
            style={{
              width: isMobile ? 146 : "auto",
              height: isMobile ? 56 : "auto",
            }}
          />
          <Typography sx={{ color: "#6D6D6D", fontWeight: 300, fontSize: 14 }}>
            Added to your EduMeer Card for registration!
          </Typography>
        </Box>
      </Box>
    </BaseModal>
  );
};

export default RewardModal;
