import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import moreItems from "../../assets/svg/more-items.svg";

const UserInfo = () => (
  <Box
    sx={{
      bgcolor: "white",
      padding: { xs: "16px", sm: "24px" },
      borderRadius: "16px",
      marginTop: "-50px",
      paddingTop: { xs: "50px", sm: "55px" },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        rowGap: "16px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 24 },
            fontWeight: 400,
            color: "#1C1C1C",
            mb: { xs: 0, sm: "10px" },
          }}
        >
          Username
        </Typography>
        {/* Rating below Username for xs */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            gap: "4px",
            mb: "8px",
          }}
        >
          <Typography sx={{ color: "#6D6D6D" }}>4.9</Typography>
          <Rating value={4.9} precision={0.1} readOnly size="small" />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 400,
            color: "#C1C1C1",
            mb: { xs: 0, sm: "5px" },
          }}
        >
          Activation Date: 05/12/2024
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 400,
            color: "#C1C1C1",
          }}
        >
          Location: Germany | Frankfurt
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row-reverse", sm: "column" },
          justifyContent: { xs: "space-between", sm: "flex-end" },
          alignItems: { xs: "flex-start", sm: "flex-end" },
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <Image
          src={moreItems}
          alt="items"
          width={40}
          height={40}
          style={{ cursor: "pointer" }}
        />

        <Box
          sx={{
            display: "flex",
            gap: "40px",
            color: "#7B7B7B",
          }}
        >
          {[
            { label: "Following", value: 330 },
            { label: "Follower", value: 1200 },
            { label: "Ads", value: 16 },
          ].map((stat) => (
            <Box
              key={stat.label}
              sx={{
                textAlign: "left",
              }}
            >
              <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>
                {stat.value}
              </Typography>
              <Typography
                sx={{ fontWeight: 300, fontSize: { xs: 12, sm: 14 } }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Rating in right column for sm+ */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Typography sx={{ color: "#6D6D6D" }}>4.9</Typography>
          <Rating value={4.9} precision={0.1} readOnly size="small" />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default UserInfo;
